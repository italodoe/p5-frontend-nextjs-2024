import { Movie } from "@/lib/types";
import CardMovieComponent from "./CardMovieComponent";
import { notFound } from "next/navigation";

type movieListParams = {
  movies: Movie[] | null;
};

export default function MovieListComponent(movieListParams: movieListParams) {
  const { movies } = movieListParams;
  if (!movies) return notFound();
  return movies.map((movie) => (
    <CardMovieComponent params={movie} key={movie.id}></CardMovieComponent>
  ));
}
