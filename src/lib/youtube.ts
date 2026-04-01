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
