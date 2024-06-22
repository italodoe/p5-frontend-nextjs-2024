"use client";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <Input
      type="text"
      className={cn(
        "text-white focus:text-black bg-slate-600/30 focus:bg-zinc-200",
        "transition ease-in-out delay-150"
      )}
      placeholder="Search ...."
    />
  );
}
