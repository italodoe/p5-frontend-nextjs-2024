import { Movie } from "@/lib/types";
import { notFound } from "next/navigation";
import CardMovieComponent from "./CardMovieComponent";

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
