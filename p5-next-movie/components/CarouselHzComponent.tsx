"use client";
import Image from "next/image";

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

export default function CarouselHzComponent(movieListParams: movieListParams) {
  const { movies } = movieListParams;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs   "
    >
      <CarouselContent className="-mt-1 h-[470px] ">
        {movies.map((movie, index) => (
          <CarouselItem
            key={movie.id + "-" + movie.popularity}
            className="pt-1 md:basis-1/2 "
          >
            <Link href={`/movie/${movie.id}`} className="card-main-link">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-2 flex-col">
                    <div className="h-10 w-full flex content-center justify-start  text-2xl leading-8 font-normal text-white line-overflow-1">
                      {movie.title}
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="w-2/5">
                        <Image
                         key={movie.poster_path}
                          src={getMoviePicture(movie.poster_path)}
                          width={100}
                          height={200}
                          className="rounded-md bg-indigo-500 shadow-md shadow-indigo-200/30"
                          alt={movie.title}
                        ></Image>
                      </div>
                      <div className="w-2/5">
                        <div className="font-regular text-white text-opacity-80 line-overflow-5">
                          {movie.overview}
                        </div>
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
