import CarouselComponent from "@/components/CarouselComponent";
import {
  actionGetMoviesLteGte,
  actionGetMoviesNowPlaying,
  actionGetMoviesPopular,
  actionGetMoviesTopRated,
  actionGetMoviesUpcoming,
  actionGetPeopleTopRated,
} from "./actions/movies";
import CarouselHzComponent from "@/components/CarouselHzComponent";
import CarouselPopularComponent from "@/components/CarouselPopularComponent";
import CarouselPopularPeopleComponent from "@/components/CarouselPopularPeopleComponent";
import CaptionComponent from "@/components/CaptionComponent";
import { movieCategories } from "@/lib/utils";

export default async function Home() {
  const now_playing_movies = await actionGetMoviesNowPlaying();
  const upcoming_movies = await actionGetMoviesUpcoming();
  const popular = await actionGetMoviesPopular();
  const top_rated = await actionGetMoviesTopRated();
  const from_2000s = await actionGetMoviesLteGte("2010-01-01", "2000-01-01");
  const from_90s = await actionGetMoviesLteGte("1999-12-12", "1990-01-01");
  const from_80s = await actionGetMoviesLteGte("1990-01-01", "1980-01-01");
  const people = await actionGetPeopleTopRated();
  return (
    <main className="flex-1  md:container mx-auto    min-h-screen">
      <div className="w-full flex flex-row h-auto items-center justify-center gap-10">
        <div className="  w-3/4 flex justify-center">
          <CarouselComponent movies={now_playing_movies}></CarouselComponent>
        </div>

        <div className="w-1/4 hidden md:flex flex-col ">
          <div className="relative -top-16 caption">
            <CaptionComponent
              caption={movieCategories.upcoming.text}
              href={movieCategories.upcoming.href}
            ></CaptionComponent>
          </div>
          <CarouselHzComponent movies={upcoming_movies}></CarouselHzComponent>
        </div>
      </div>
      <div>
        <div>
          {/* Popular */}
          <div>
            <CaptionComponent
              caption={movieCategories.popular.text}
              href={movieCategories.popular.href}
            ></CaptionComponent>
            <div>
              <CarouselPopularComponent
                movies={popular}
              ></CarouselPopularComponent>
            </div>
          </div>

          {/* Top Rated */}
          <div>
            <CaptionComponent
              caption={movieCategories.top_rated.text}
              href={movieCategories.top_rated.href}
            ></CaptionComponent>
            <div>
              <CarouselPopularComponent
                movies={top_rated}
              ></CarouselPopularComponent>
            </div>
          </div>

          {/* From 2000's */}
          <div>
            <CaptionComponent
              caption={movieCategories.from_2000.text}
              href={movieCategories.from_2000.href}
            ></CaptionComponent>
            <div>
              <CarouselPopularComponent
                movies={from_2000s}
              ></CarouselPopularComponent>
            </div>
          </div>

          {/* From 90's */}
          <div>
            <CaptionComponent
              caption={movieCategories.from_1990.text}
              href={movieCategories.from_1990.href}
            ></CaptionComponent>
            <div>
              <CarouselPopularComponent
                movies={from_90s}
              ></CarouselPopularComponent>
            </div>
          </div>

          {/* From 80's */}
          <div>
            <CaptionComponent
              caption={movieCategories.from_1980.text}
              href={movieCategories.from_1980.href}
            ></CaptionComponent>
            <div>
              <CarouselPopularComponent
                movies={from_80s}
              ></CarouselPopularComponent>
            </div>
          </div>

          {/* People */}
          <div>
            <CaptionComponent
              caption={movieCategories.people.text}
              href={movieCategories.people.href}
            ></CaptionComponent>
            <div>
              <CarouselPopularPeopleComponent
                people={people}
              ></CarouselPopularPeopleComponent>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
