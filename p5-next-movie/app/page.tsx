// "use client";

import CarouselComponent from "@/components/CarouselComponent";
import {
  actionGetMoviesNowPlaying,
  actionGetMoviesUpcoming,
} from "./actions/movies";
import CarouselHzComponent from "@/components/CarouselHzComponent";

export default async function Home() {
  const now_playing_movies = await actionGetMoviesNowPlaying();
  const upcoming_movies = await actionGetMoviesUpcoming();

  return (
    <main className="flex-1  md:container mx-auto    min-h-screen">
      <div className="w-full flex flex-row h-auto items-center justify-center gap-10">
        <div className="  w-3/4 flex justify-center">
          <CarouselComponent movies={now_playing_movies}></CarouselComponent>
        </div>

        <div className="w-1/4 hidden md:flex ">
          <CarouselHzComponent   movies={upcoming_movies}></CarouselHzComponent>
        </div>
      </div>
    </main>
  );
}
