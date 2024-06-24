"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Movie } from "@/lib/types";
import { getMoviePicture } from "@/lib/utils";
import Link from "next/link";
type movieListParams = {
  movies: Movie[];
};

export default function CarouselComponent(movieListParams: movieListParams) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { movies } = movieListParams;
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen-md "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.map((movie: Movie, index) => (
          <CarouselItem key={movie.id + "-" + movie.popularity}>
            <Link href={`/movie/${movie.id}`} className="card-main-link">
              <div className=" ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="w-full flex-col h-full flex flex-no-wrap content-center justify-start items-center">
                      <div className="h-20 w-full flex content-center justify-center items-center text-4xl font-regular text-white">
                        {movie.title}
                      </div>
                      <div></div>
                      <Image
                        key={movie.backdrop_path}
                        className="rounded-md skeleton-img"
                        src={getMoviePicture(movie.backdrop_path)}
                        width={1000}
                        height={500}
                        alt="movie"
                      ></Image>
                      <div className="flex text-justify pt-4 font-medium text-white   xt-zinc-200 mt-8 line-overflow-4 ">
                        {movie.overview}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-2	" />
      <CarouselNext className="border-2	" />
    </Carousel>
  );
}
