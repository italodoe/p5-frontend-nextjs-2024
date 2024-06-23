import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import Link from "next/link";
import SearchInput from "./SearchInputComponent";

export default function Header() {
  return (
    <header
      className={cn(
        " items-center p-3 w-full   sticky top-0  z-10 backdrop-blur-md  bg-[#5151514d]"
      )}
    >
      <div className="flex flex-row flex-no-wrap items-center  md:container m-auto justify-between gap-3">
        <Link href={"/"}>
          <Avatar>
            <AvatarImage src="/logo.svg" alt="icon" />
            <AvatarFallback>MOVIE</AvatarFallback>
          </Avatar>
        </Link>
        <div className="lg:max-w-screen-xl w-3/6 sm:gap-x-56 ">
          <SearchInput></SearchInput>
        </div>
        <div>
          <Button
            className="text-zinc-100 bg-slate-600/30"
            variant="ghost"
            size={"icon"}
          >
            ES
          </Button>
        </div>
      </div>
    </header>
  );
}
