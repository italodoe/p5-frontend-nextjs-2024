import { Movie, Person } from "@/lib/types";
import { capitalizeFirstLetter } from "@/lib/utils";
import MovieListComponent from "./MovieListComponent";
import { notFound } from "next/navigation";
import PaginationComponent from "./PaginationComponent";
import PersonListComponent from "./PersonListComponent";

type pageListParams = {
  term: string | null;
  text: string;
  movies: Movie[] | null;
  people: null | Person[];
  page: number;
  totalPages: number;
};

export default function PageList(pageListParams: pageListParams) {
  const { term, text, page, movies, totalPages, people } = pageListParams;
  let componentList = <></>;
  if (movies)
    componentList = <MovieListComponent movies={movies}></MovieListComponent>;
  else if (people)
    componentList = <PersonListComponent people={people}></PersonListComponent>;
  // else return notFound();

  return (
    <main className="main-page flex-1  md:container mx-auto pt-5">
      <div className="w-full h-hull pb-10">
        <div className="caption w-full text-center pt-16 pb-16">
          {capitalizeFirstLetter(text)}
        </div>
        {}
        <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
          {componentList}
        </div>
        {
          <div className="flex flex-col items-center py-10 text-zinc-100 w-full m-auto">
            <PaginationComponent
              totalPages={totalPages}
              actual={page}
              term={term}
            />
          </div>
        }
      </div>
    </main>
  );
}
