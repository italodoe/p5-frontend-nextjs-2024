import PageList from "@/components/PageList";
import { serverParams } from "@/lib/types";
import { FC } from "react";
import { actionSearchMovies } from "../actions/movies";

const Home: FC<serverParams> = async ({ searchParams }: serverParams) => {
  const { query, page } = searchParams;
  var movies_search = null;
  if (query)
    movies_search = await actionSearchMovies(query)

  console.log(query);

  return (
    <PageList term={query} movies={movies_search}></PageList>
  );
};
export default Home;
