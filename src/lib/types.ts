export interface FilmItem {
  title: string;
  metadata: string;
  imageSrc: string;
  aspectRatio: "video" | "square" | "wide";
}

export interface RecognitionItem {
  id: string;
  label: string;
  value: string;
  metadata?: string;
  description?: string;
}

export interface PressArticle {
  title: string;
  metadata: string;
  imageSrc: string;
  aspectRatio: "video" | "square" | "wide";
}

export interface BiographyPillar {
  id: string;
  label: string;
  value: string;
  description: string;
}
