"use server";

import {
  getMoviesLteGte,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  getPersonPopular,
  getSingleMovie,
  searchMovies,
} from "@/lib/movies";

export async function actionGetMoviesNowPlaying(page: number) {
  const now_playing_movies = await getMoviesNowPlaying(page);
  return now_playing_movies;
}

export async function actionGetMoviesUpcoming(page: number) {
  const upcoming_movies = await getMoviesUpcoming(page);
  return upcoming_movies;
}

export async function actionGetMoviesPopular(page: number) {
  const popular_movies = await getMoviesPopular(page);
  return popular_movies;
}

export async function actionGetMoviesTopRated(page: number) {
  const top_rated_movies = await getMoviesTopRated(page);
  return top_rated_movies;
}

export async function actionGetPeopleTopRated(page: number) {
  const popular_people = await getPersonPopular(page);
  return popular_people;
}

export async function actionGetMoviesLteGte(
  lte: string,
  gte: string,
  page: number
) {
  const discover_movies = await getMoviesLteGte(lte, gte, page);
  return discover_movies;
}

export async function actionSingleMovie(movieId: number) {
  const movie = await getSingleMovie(movieId);
  return movie;
}

export async function actionSearchMovies(query: string, page: number) {
  const movies = await searchMovies(query, page);
  return movies;
}
