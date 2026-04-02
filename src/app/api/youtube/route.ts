import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');
  const handle = searchParams.get('handle'); // --- [CHANGE: Support channel handles/IDs] ---

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (videoId) {
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
        console.error('YouTube Video API Error:', error);
      }
    }

    // Video Fallback Scraping
    try {
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      const htmlResponse = await fetch(videoUrl);
      const html = await htmlResponse.text();
      const descMatch = html.match(/<meta name="description" content="([^"]+)"/i);
      const description = descMatch ? descMatch[1] : 'No description found';
      const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
      const title = titleMatch ? titleMatch[1] : 'YouTube Video';
      return NextResponse.json({
        title,
        description,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch video details' }, { status: 500 });
    }
  }

  // --- [CHANGE: Handle Channel Icon Fetching via Handle or ID] ---
  const channelId = searchParams.get('channelId');

  if ((handle || channelId) && apiKey) {
    try {
      const queryParam = handle ? `forHandle=${handle}` : `id=${channelId}`;
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&${queryParam}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        return NextResponse.json({ 
          icon: data.items[0].snippet.thumbnails.default.url,
          title: data.items[0].snippet.title 
        });
      }
    } catch (error) {
       console.error('YouTube Channel API Error:', error);
    }
  }

  return NextResponse.json({ error: 'ID, Handle, or ChannelId required' }, { status: 400 });
}
