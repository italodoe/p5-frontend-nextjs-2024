import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Movie, Person } from "@/lib/types";
import {
  getDefaultDateFormat,
  getDefaultMoviePicture,
  getMoviePicture,
} from "@/lib/utils";

type CardPersonProps = {
  params: Person;
};

export default function CardPersonComponent({ params }: CardPersonProps) {
  const {
    name,
    gender,
    id,
    original_name,
    profile_path,
    popularity,
    known_for,
  } = params;

  var image_path = getDefaultMoviePicture();
  if (profile_path !== null) image_path = getMoviePicture(profile_path);
  return (
    <Link href={`/movie/${id}`} className="card-link">
      <Card className="card-item bg-stone-900 text-destructive-foreground hover:bg-stone-800 cursor-pointer select-none">
        <Image
          className="card-image"
          src={image_path}
          width={"5000"}
          height={"2000"}
          alt={name}
        ></Image>
        <CardHeader>
          <CardTitle title={name} className="text-xl title-content">
            {name}
          </CardTitle>
          <CardDescription className="text-xs text-zinc-300">
            {name !== original_name ? original_name : ""}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-28   ">
          <div className=" max-h-full card-content">
            <div className="font-regular text-white text-opacity-80 line-overflow-5 ">
              {known_for.map((movie: Movie, index) => (
                <div key={movie.id + "-" + id}>{movie.title}</div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className=" min-h-5">
          <div className="text-xs text-zinc-500 flex flex-row items-center">
            {popularity}

            {
              <div className="max-w-5 max-h-5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59c-.125.36-.479 1.013-1.04 1.639c-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545c1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484c.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464c.201-.263.38-.578.488-.901c.11-.33.172-.762.004-1.149c.069-.13.12-.269.159-.403c.077-.27.113-.568.113-.857c0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362a1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272c-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05a9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164c-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868c-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65c1.095-.3 1.977-.996 2.614-1.708c.635-.71 1.064-1.475 1.238-1.978c.243-.7.407-1.768.482-2.85c.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725a.5.5 0 0 0 .595.644l.003-.001l.014-.003l.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164c.175.058.45.3.57.65c.107.308.087.67-.266 1.022l-.353.353l.353.354c.043.043.105.141.154.315c.048.167.075.37.075.581c0 .212-.027.414-.075.582c-.05.174-.111.272-.154.315l-.353.353l.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353l.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                  />
                </svg>
              </div>
            }
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
