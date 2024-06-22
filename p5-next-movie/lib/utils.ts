import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getMoviePicture = (imageId: string) => {
  return `https://image.tmdb.org/t/p/original/${imageId}`;
}