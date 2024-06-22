import { env } from "./env";
import { Movie } from "./types";

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env("TMDB_TOKEN")}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/${path}`,
    options
  );
  return await response.json();
};

export const getMoviesNowPlaying = async () => {
  const { results: now_playing } = await tmdbFetch("movie/now_playing");
  const movies = now_playing.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};


export const getMoviesUpcoming = async () => {
  const { results: upcoming } = await tmdbFetch("movie/upcoming");
  const movies = upcoming.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};


