"use server";

import {
  getMoviesLteGte,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  getPersonPopular,
  getSingleMovie,
} from "@/lib/movies";

export async function actionGetMoviesNowPlaying() {
  const now_playing_movies = await getMoviesNowPlaying();
  return now_playing_movies;
}

export async function actionGetMoviesUpcoming() {
  const upcoming_movies = await getMoviesUpcoming();
  return upcoming_movies;
}

export async function actionGetMoviesPopular() {
  const popular_movies = await getMoviesPopular();
  return popular_movies;
}

export async function actionGetMoviesTopRated() {
  const top_rated_movies = await getMoviesTopRated();
  return top_rated_movies;
}

export async function actionGetPeopleTopRated() {
  const popular_people = await getPersonPopular();
  return popular_people;
}

export async function actionGetMoviesLteGte(lte: string, gte: string) {
  const discover_movies = await getMoviesLteGte(lte, gte);
  return discover_movies;
}

export async function actionSingleMovie(movieId: number) {
  const movie = await getSingleMovie(movieId);
  return movie;
}
