import PageList from "@/components/PageList";
import { serverParams } from "@/lib/types";
import { FC } from "react";
import { actionSearchMovies } from "../actions/movies";

const Home: FC<serverParams> = async ({ searchParams }: serverParams) => {
  const { query, page } = searchParams;
  var actualPage = page ? page : 1;
  const block = await actionSearchMovies(query, actualPage);
  const { movies: movies_search, total_pages } = block;

  return (
    <PageList
      text={query}
      term={query}
      page={actualPage}
      movies={movies_search}
      totalPages={total_pages}
      people={null}
    ></PageList>
  );
};
export default Home;
