import { actionSingleMovie } from "@/app/actions/movies";
import { getMoviePicture } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    movieId: number;
  };
};

export default async function Page({ params }: PageProps) {
  const { movieId } = params;
  const movie = await actionSingleMovie(movieId);
  console.log('movie--->>', movie)
  if (movie.hasOwnProperty('success') && !movie['success'])
    return notFound();
  const backdropImg = getMoviePicture(movie.backdrop_path);
  const posterImg = getMoviePicture(movie.poster_path);

  return (
    <main className="main-page flex-1  md:container mx-auto pt-5">
      <Image
        fill
        src={backdropImg}
        className="w-screen h-screen opacity-30 object-center -z-10 absolute min-h-screen min-w-screen left-0 right-0 bottom-0  "
        alt="image"
      ></Image>
      <div className="w-3/4 mx-auto pt-unit-2xl ">
        <div className="flex h-full">
          <Image
            className={movie.title}
            src={posterImg}
            width={400}
            height={700}
            alt={"poster"}
          ></Image>
          <div className="flex flex-col justify-center pl-10 basis-2/4 text-zinc-100">
            <h1 className="text-3xl font-bold uppercase">{movie.title}</h1>
            <p className="text-md italic">{movie.tagline}</p>
            <h2 className="text-2xl mt-10 uppercase font-bold">overview</h2>
            <p className="text-lg ">{movie.overview}</p>
            <h3 className="text-md uppercase font-bold mt-10">Release date</h3>
            <p className="text-lg">{movie.release_date}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
