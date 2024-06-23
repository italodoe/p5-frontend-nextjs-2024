export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string | Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieResult = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

 
export type Person = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    known_for: Movie[];
};

export type PersonResult = {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
};

export interface Category {
  text: string;
  href: string;
  code?: string; // optional since not all categories have a code
}

export interface MovieCategories {
  upcoming: Category;
  popular: Category;
  top_rated: Category;
  from_2000: Category;
  from_1990: Category;
  from_1980: Category;
  people: Category;
}