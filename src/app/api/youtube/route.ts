import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  // Use YouTube Data API v3 if API key is provided in .env
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (apiKey) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const snippet = data.items[0].snippet;
        return NextResponse.json({
          title: snippet.title,
          description: snippet.description,
          thumbnail: snippet.thumbnails.maxres?.url || snippet.thumbnails.high?.url || snippet.thumbnails.default?.url,
        });
      }
    } catch (error) {
      console.error('YouTube API Error:', error);
      // Fallback to scraping if API fails
    }
  }

  // Fallback / Default: Simple Scraping approach (extract from meta tags)
  try {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const htmlResponse = await fetch(videoUrl);
    const html = await htmlResponse.text();

    // Extract description from meta tag
    const descMatch = html.match(/<meta name="description" content="([^"]+)"/i);
    const description = descMatch ? descMatch[1] : 'No description found';

    // Extract title from meta tag
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
    const title = titleMatch ? titleMatch[1] : 'YouTube Video';

    return NextResponse.json({
      title,
      description,
      // Thumbnail can be derived from ID
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch video details' }, { status: 500 });
  }
}
