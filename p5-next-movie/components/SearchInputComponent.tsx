"use client";
import { cn, debounce } from "@/lib/utils";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useRef } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handle = (value: string, searchParams: URLSearchParams) => {
    let url = `/search/?`;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
      url = `/search/?${params.toString()}`;
    } else {
      params.delete("query");
      url = `/`;
    }
    replace(url);
  };

  const handleOnChange = debounce((value: string) => {
    handle(value, searchParams);
  }, 300);

  const textRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handle(textRef.current!.value, searchParams);
  };

  return (
    <form
      className="p-2 flex flex-row gap-3 justify-center"
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        ref={textRef}
        className={cn(
          "text-white focus:text-black bg-slate-600/30 focus:bg-zinc-200",
          "transition ease-in-out delay-150"
        )}
        placeholder="Search ...."
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </form>
  );
}
