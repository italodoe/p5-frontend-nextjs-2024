import {
  actionGetMoviesLteGte,
  actionGetMoviesPopular,
  actionGetMoviesTopRated,
  actionGetMoviesUpcoming,
  actionGetPeopleTopRated,
} from "@/app/actions/movies";
import CaptionComponent from "@/components/CaptionComponent";
import MovieListComponent from "@/components/MovieListComponent";
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
    <main className="main-page flex-1  md:container mx-auto pt-5">
      <div className="w-full h-hull pb-10">
        <div className="caption w-full text-center pt-16 pb-16">
          {capitalizeFirstLetter(category)}
        </div>

        <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
          {<MovieListComponent movies={result}></MovieListComponent>}
        </div>
        {/* <div className="flex flex-col items-center py-10 text-zinc-100 w-full m-auto">
        <PaginationComponent></PaginationComponent>
      </div> */}
      </div>
    </main>
  );
}
