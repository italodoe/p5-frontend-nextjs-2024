// "use client";

import CarouselComponent from "@/components/CarouselComponent";
import {
  actionGetMoviesNowPlaying,
  actionGetMoviesUpcoming,
} from "./actions/movies";
import CarouselHzComponent from "@/components/CarouselHzComponent";
import CarouselPopularComponent from "@/components/CarouselPopularComponent";

export default async function Home() {
  const now_playing_movies = await actionGetMoviesNowPlaying();
  const upcoming_movies = await actionGetMoviesUpcoming();

  return (
    <main className="flex-1  md:container mx-auto    min-h-screen">
      <div className="w-full flex flex-row h-auto items-center justify-center gap-10">
        <div className="  w-3/4 flex justify-center">
          <CarouselComponent movies={now_playing_movies}></CarouselComponent>
        </div>

        <div className="w-1/4 hidden md:flex flex-col ">
          <div className="relative -top-16 caption">Upcoming</div>
          <CarouselHzComponent movies={upcoming_movies}></CarouselHzComponent>
        </div>
      </div>
      <div>
        <div>
          <div className="caption">Popular</div>
          <div>
            
            <CarouselPopularComponent movies={upcoming_movies}></CarouselPopularComponent>
          </div>
        </div>
      </div>
    </main>
  );
}
