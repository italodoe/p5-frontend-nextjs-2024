"use server";

import { getMoviesNowPlaying, getMoviesUpcoming } from "@/lib/movies";

export async function actionGetMoviesNowPlaying() {
  const now_playing_movies = await getMoviesNowPlaying();
  return now_playing_movies;
}

export async function actionGetMoviesUpcoming() {
  const upcoming_movies = await getMoviesUpcoming();
  return upcoming_movies;
}
