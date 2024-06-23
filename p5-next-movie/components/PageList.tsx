import { Movie } from "@/lib/types";
import { capitalizeFirstLetter } from "@/lib/utils";
import MovieListComponent from "./MovieListComponent";
import { notFound } from "next/navigation";

type pageListParams = {
  term: string;
  movies: Movie[] | null;
};

export default function PageList(pageListParams: pageListParams) {
  const { term, movies } = pageListParams;
  if (movies === null || !Array.isArray(movies) || !movies.length)
    return notFound();
  return (
    <main className="main-page flex-1  md:container mx-auto pt-5">
      <div className="w-full h-hull pb-10">
        <div className="caption w-full text-center pt-16 pb-16">
          {capitalizeFirstLetter(term)}
        </div>

        <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
          {<MovieListComponent movies={movies}></MovieListComponent>}
        </div>
        {/* <div className="flex flex-col items-center py-10 text-zinc-100 w-full m-auto">
            <PaginationComponent></PaginationComponent>
          </div> */}
      </div>
    </main>
  );
}
