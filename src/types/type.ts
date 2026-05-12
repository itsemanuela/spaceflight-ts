export interface SpaceflightResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IArticle[];
}

export interface IArticle {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

export interface Author {
  name: string;
  socials: Socials | null;
}

export interface Socials {
  x?: string;
  linkedin?: string;
  github?: string;
}

export interface Launch {
  launch_id: string;
  provider: string;
}

export interface Event {
  event_id: number;
  provider: string;
}
