/**
 * Utility functions for YouTube integration
 */

/**
 * Extracts the video ID from various YouTube URL formats
 * Supports: youtube.com/watch?v=, youtu.be/, youtube.com/shorts/
 */
export function getYouTubeID(url: string): string | null {
  if (!url) return null;
  
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[1].length === 11) {
    return match[1];
  }
  
  return null;
}

/**
 * Gets the thumbnail URL for a YouTube video with fallback support
 */
export async function getYouTubeThumbnail(videoID: string): Promise<string> {
  const maxResUrl = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
  const hqDefaultUrl = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

  try {
    const response = await fetch(maxResUrl, { method: 'HEAD' });
    if (response.ok) {
      return maxResUrl;
    }
  } catch (err) {
    // If HEAD request fails (e.g. CORS), we'll just return hqdefault as a safe fallback
    // Or we could return the maxResUrl and let the browser handle it (might show a broken image if unavailable)
  }
  
  return hqDefaultUrl;
}
