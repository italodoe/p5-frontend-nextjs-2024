import { env } from "./env";
import { Movie, Person, SingleMovie } from "./types";

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env("TMDB_TOKEN")}`,
      cache: "no-store"
    },
  };
  const response = await fetch(`https://api.themoviedb.org/3/${path}`, options);
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

export const getMoviesPopular = async () => {
  const { results: popular } = await tmdbFetch("movie/popular");
  const movies = popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};

export const getMoviesTopRated = async () => {
  const { results: top_rated } = await tmdbFetch("movie/top_rated");
  const movies = top_rated.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};

export const getPersonPopular = async () => {
  const { results: people_popular } = await tmdbFetch("person/popular");
  const people = people_popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return people as Person[];
};

export const getMoviesLteGte = async (lte: string, gte: string) => {
  const { results: discover_movies } = await tmdbFetch(
    `discover/movie?primary_release_date.gte=${gte}&primary_release_date.lte=${lte}&sort_by=popularity.desc`
  );
  const discover = discover_movies.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  console.log(discover);
  return discover as Movie[];
};

export const getSingleMovie = async (movieId: number) => {
  const movie = await tmdbFetch(`movie/${movieId}`);
  return movie as SingleMovie;
};
