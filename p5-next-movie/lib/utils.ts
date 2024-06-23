import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MovieCategories } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMoviePicture = (imageId: string) => {
  return `https://image.tmdb.org/t/p/original/${imageId}`;
};
export const getDefaultMoviePicture = () => {
  return "/default.webp";
};

export const getDefaultDateFormat = () => {
  var dateOptions = { year: "numeric", month: "long", day: "numeric" };
};

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const movieCategories: MovieCategories = {
  upcoming: {
    code: "upcoming",
    text: "Upcoming",
    href: "/movies/upcoming",
  },
  popular: {
    code: "popular",
    text: "Popular",
    href: "/movies/popular",
  },
  top_rated: {
    code: "top-rated",
    text: "Top Rated",
    href: "/movies/top-rated",
  },
  from_2000: {
    code: "from-2000",
    text: "From 2000",
    href: "/movies/from-2000",
  },
  from_1990: {
    code: "from-1990",
    text: "From 1990",
    href: "/movies/from-1990",
  },
  from_1980: {
    code: "from-1980",
    text: "From 1980",
    href: "/movies/from-1980",
  },
  people: {
    code: "people",
    text: "People",
    href: "/movies/people",
  },
};


export function debounce(fn: any, delay: number) {
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}