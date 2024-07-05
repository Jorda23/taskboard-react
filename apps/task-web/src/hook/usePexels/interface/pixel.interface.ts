export interface PexelsPhoto {
  Id: number;
  Width: number;
  Height: number;
  Url: string;
  Photographer: string;
  Photographer_url: string;
  photographer_id: number;
  Avg_color: string;
  Src: {
    Original: string;
    Large2x: string;
    Large: string;
    Medium: string;
    Small: string;
    Portrait: string;
    Landscape: string;
    Tiny: string;
  };
  Liked: boolean;
  Alt: string;
}

export interface PexelsResponse {
  Page: number;
  Per_page: number;
  Photos: PexelsPhoto[];
  Total_results: number;
  Next_page: string;
}
