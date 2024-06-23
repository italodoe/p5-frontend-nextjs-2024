import { env } from "./env";
import { Movie, Person, SingleMovie } from "./types";

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env("TMDB_TOKEN")}`,
      cache: "no-store",
    },
  };
  const response = await fetch(`https://api.themoviedb.org/3/${path}`, options);
  return await response.json();
};

export const getMoviesNowPlaying = async (pageToSearch: number) => {
  const {
    results: now_playing,
    page,
    total_pages,
  } = await tmdbFetch(`movie/now_playing?page=${pageToSearch}`);
  const movies = now_playing.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return { movies: movies as Movie[], page, total_pages };
};

export const getMoviesUpcoming = async (pageToSearch: number) => {
  const {
    results: upcoming,
    page,
    total_pages,
  } = await tmdbFetch(`movie/upcoming?page=${pageToSearch}`);
  const movies = upcoming.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return { movies: movies as Movie[], page, total_pages };
};

export const getMoviesPopular = async (pageToSearch: number) => {
  const {
    results: popular,
    page,
    total_pages,
  } = await tmdbFetch(`movie/popular?page=${pageToSearch}`);
  const movies = popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return { movies: movies as Movie[], page, total_pages };
};

export const getMoviesTopRated = async (pageToSearch: number) => {
  const {
    results: top_rated,
    page,
    total_pages,
  } = await tmdbFetch(`movie/top_rated?page=${pageToSearch}`);
  const movies = top_rated.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return { movies: movies as Movie[], page, total_pages };
};

export const getPersonPopular = async (pageToSearch: number) => {
  const {
    results: people_popular,
    page,
    total_pages,
  } = await tmdbFetch(`person/popular?page=${pageToSearch}`);
  const people = people_popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return { people: people as Person[], page, total_pages };
};

export const getMoviesLteGte = async (
  lte: string,
  gte: string,
  pageToSearch: number
) => {
  const {
    results: discover_movies,
    page,
    total_pages,
  } = await tmdbFetch(
    `discover/movie?primary_release_date.gte=${gte}&primary_release_date.lte=${lte}&sort_by=popularity.desc&page=${pageToSearch}`
  );
  const discover = discover_movies.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  console.log(discover);

  return { discover: discover as Movie[], page, total_pages };
};

export const getSingleMovie = async (movieId: number) => {
  const movie = await tmdbFetch(`movie/${movieId}}`);
  return movie as SingleMovie;
};

export const searchMovies = async (query: string, pageToSearch: number) => {
  const {
    results: popular,
    page,
    total_pages,
  } = await tmdbFetch(`search/movie?query=${query}&page=${pageToSearch}`);
  const movies = popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return { movies: movies as Movie[], page, total_pages };
};
