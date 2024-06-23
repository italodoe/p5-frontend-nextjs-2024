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
import { Movie, Person } from "@/lib/types";
import { getMoviePicture } from "@/lib/utils";
import Link from "next/link";
type movieListParams = {
  people: Person[];
};

export default function CarouselPopularPeopleComponent(
  movieListParams: movieListParams
) {
  const { people } = movieListParams;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="w-full   "
    >
      <CarouselContent className="-mt-1 h-[300px]">
        {people.map((person, index) => (
          <CarouselItem
            key={person.id + "-" + person.popularity}
            className="pt-1 lg:basis-[25%] md:basis-[50%] basis-[10%] "
          >
            <Link href={`/movie/${person.id}`} className="card-main-link">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-2 flex-col">
                    <div className="h-10 w-full flex content-center justify-start  text-2xl leading-8 font-normal text-white line-overflow-1">
                      {person.name}
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                      <div className="w-2/6">
                        <Image
                          src={getMoviePicture(person.profile_path)}
                          width={200}
                          height={200}
                          className="    rounded-full"
                          alt={person.name}
                        ></Image>
                      </div>
                      <div className="w-2/3 flex items-center ">
                        <div className="font-regular text-white text-opacity-80 line-overflow-5 ">
                          <div className="flex flex-col">
                            {person.known_for.map((movie: Movie, index) => (
                              <div key={movie.id + "-" + person.id}>
                                {movie.title}
                              </div>
                            ))}
                          </div>
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
