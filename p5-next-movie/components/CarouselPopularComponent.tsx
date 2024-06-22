"use client";
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
type movieListParams = {
  movies: Movie[];
};

export default function CarouselPopularComponent(movieListParams: movieListParams) {
  const { movies } = movieListParams;
  return (
 
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="w-full   "
    >
      <CarouselContent className="-mt-1 h-[500px]">
        {movies.map((movie, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2 flex-col">
                  <div className="h-10 w-full flex content-center justify-start  text-lg font-bold text-white line-overflow-1">
                    {movie.title}
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="w-2/6">
                      <Image
                        src={getMoviePicture(movie.poster_path)}
                        width={100}
                        height={200}
                        className="rounded-md bg-indigo-500 shadow-md shadow-indigo-200/30"
                        alt={movie.title}
                      ></Image>
                    </div>
                    <div className="w-2/3 flex items-center ">
                      <div className="font-regular text-white text-opacity-80 line-overflow-5 ">
                        {movie.overview}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  );
}
