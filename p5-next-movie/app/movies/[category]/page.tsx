import {
  actionGetMoviesLteGte,
  actionGetMoviesPopular,
  actionGetMoviesTopRated,
  actionGetMoviesUpcoming,
  actionGetPeopleTopRated,
} from "@/app/actions/movies";
import CaptionComponent from "@/components/CaptionComponent";
import MovieListComponent from "@/components/MovieListComponent";
import PageList from "@/components/PageList";
import { capitalizeFirstLetter, movieCategories } from "@/lib/utils";

type PageProps = {
  params: {
    category: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { category } = params;
  let result = null;

  switch (category.toLowerCase()) {
    case movieCategories.upcoming.code: {
      result = await actionGetMoviesUpcoming();
      break;
    }

    case movieCategories.popular.code: {
      result = await actionGetMoviesPopular();
      break;
    }

    case movieCategories.top_rated.code: {
      result = await actionGetMoviesTopRated();
      break;
    }

    case movieCategories.from_2000.code: {
      result = await actionGetMoviesLteGte("2010-01-01", "2000-01-01");
      break;
    }

    case movieCategories.from_1990.code: {
      result = await actionGetMoviesLteGte("1999-12-12", "1990-01-01");
      break;
    }

    case movieCategories.from_1980.code: {
      result = await actionGetMoviesLteGte("1990-01-01", "1980-01-01");
      break;
    }

    // case movieCategories.people.code: {
    //   result = await actionGetPeopleTopRated();
    //   break;
    // }

    default: {
      break;
    }
  }

  return (
    <PageList term={category} movies={result}></PageList>
  );
}
