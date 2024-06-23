import {
  actionGetMoviesLteGte,
  actionGetMoviesPopular,
  actionGetMoviesTopRated,
  actionGetMoviesUpcoming,
  actionGetPeopleTopRated,
} from "@/app/actions/movies";
import PageList from "@/components/PageList";
import { movieCategories } from "@/lib/utils";
import { FC } from "react";

type serverParams = {
  searchParams: {
    page: number;
  };
  params: {
    category: string;
  };
};

const Home: FC<serverParams> = async ({
  searchParams,
  params,
}: serverParams) => {
  const { category } = params;
  const { page } = searchParams;
  var actualPage = page ? page : 1;
  let result = null;
  let people = null;
  let total_pages = 1;
  let block = null;

  switch (category.toLowerCase()) {
    case movieCategories.upcoming.code: {
      block = await actionGetMoviesUpcoming(actualPage);
      result = block.movies;
      total_pages = block.total_pages;
      break;
    }

    case movieCategories.popular.code: {
      block = await actionGetMoviesPopular(actualPage);
      result = block.movies;
      total_pages = block.total_pages;
      total_pages = block.total_pages;
      break;
    }

    case movieCategories.top_rated.code: {
      block = await actionGetMoviesTopRated(actualPage);
      result = block.movies;
      total_pages = block.total_pages;
      break;
    }

    case movieCategories.from_2000.code: {
      block = await actionGetMoviesLteGte(
        "2010-01-01",
        "2000-01-01",
        actualPage
      );
      result = block.discover;
      total_pages = block.total_pages;
      break;
    }

    case movieCategories.from_1990.code: {
      block = await actionGetMoviesLteGte(
        "1999-12-12",
        "1990-01-01",
        actualPage
      );
      result = block.discover;
      total_pages = block.total_pages;
      break;
    }

    case movieCategories.from_1980.code: {
      block = await actionGetMoviesLteGte(
        "1990-01-01",
        "1980-01-01",
        actualPage
      );
      result = block.discover;
      total_pages = block.total_pages;
      break;
    }

    case movieCategories.people.code: {
      block = await actionGetPeopleTopRated(actualPage);
      people = block.people;
      total_pages = block.total_pages;

      break;
    }

    default: {
      break;
    }
  }

  return (
    <PageList
      text={category}
      movies={result}
      people={people}
      page={actualPage}
      term={null}
      totalPages={total_pages}
    ></PageList>
  );
};

export default Home;
