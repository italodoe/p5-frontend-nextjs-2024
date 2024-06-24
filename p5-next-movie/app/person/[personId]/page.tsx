import { actionGetSinglePerson } from "@/app/actions/movies";
import { getDefaultDateFormat, getMoviePicture } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    personId: number;
  };
};

export default async function Page({ params }: PageProps) {
  const { personId } = params;
  const person = await actionGetSinglePerson(personId);
  if (person.hasOwnProperty("success") && !person.success) return notFound();

  const backdropImg = getMoviePicture(person.profile_path);
  const posterImg = getMoviePicture(person.profile_path);

  return (
    <main className="main-page flex-1  md:container mx-auto pt-5">
      <Image
        fill
        src={backdropImg}
        className="  h-screen opacity-30 object-center -z-10 absolute min-h-screen  left-0  bottom-0 max-w-max  "
        alt="image"
      ></Image>
      <div className="w-3/4 mx-auto pt-unit-2xl ">
        <div className="flex h-full">
          <Image
            className="max-h-[700px]"
            title={person.name}
            src={posterImg}
            width={400}
            height={700}
            alt={"poster"}
          ></Image>
          <div className="flex flex-col justify-center pl-10 basis-2/4 text-zinc-100">
            <h1 className="text-3xl font-bold uppercase">{person.name}</h1>
            <p className="text-md italic">
              {person.also_known_as.map((name, index) => (
                <>
                  {index !== 0 ? " - " : ""}
                  <span className="mx-2">{name}</span>
                </>
              ))}
            </p>
            <h2 className="text-2xl mt-10 uppercase font-bold">biography</h2>
            <p className="text-lg ">{person.biography}</p>
            <h3 className="text-md uppercase font-bold mt-10">Date</h3>
            <p className="text-lg">
              {person.birthday.toLocaleString("en-US", getDefaultDateFormat())}
              {person.deathday
                ? " - " +
                  person.deathday.toLocaleString(
                    "en-US",
                    getDefaultDateFormat()
                  )
                : ""}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
