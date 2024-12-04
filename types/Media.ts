export type CoverImage = {
  large: string;
  color: string;
};

export type MediaTitle = {
  userPreferred: string;
};

export type Media = {
  averageScore?: number;
  bannerImage?: string;
  coverImage?: CoverImage;
  id: number;
  genres?: Array<string>;
  title: MediaTitle;
};
