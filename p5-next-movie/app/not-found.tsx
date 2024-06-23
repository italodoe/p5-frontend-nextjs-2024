"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function NotFound() {
  const ref = useRef<HTMLHeadingElement>(null);

  const onMouseMoveSectionHandler = (e: any) => {
    let x = e.pageX - window.innerWidth / 2;
    let y = e.pageY - window.innerHeight / 2;
    ref.current?.style.setProperty("--x", x + "px");
    ref.current?.style.setProperty("--y", y + "px");
  };

  const onMouseMoveTitleHandler = (e: any) => {
    let x = e.pageX - window.innerWidth / 2;
    let y = e.pageY - window.innerHeight / 2;

    const rad = Math.atan2(y, x).toFixed(2);
    const length = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 10);

    const x_shadow = Math.round(length * Math.cos(Number(rad)));
    const y_shadow = Math.round(length * Math.sin(Number(rad)));

    ref.current?.style.setProperty("--x-shadow", -x_shadow + "px");
    ref.current?.style.setProperty("--y-shadow", -y_shadow + "px");
  };

  return (
    <section
      className="error_section "
      onMouseMove={(e) => onMouseMoveSectionHandler}
    >
      <p className="error_section_subtitle">Not found</p>
      <h1
        className="error_title text-zinc-900 cursor-default fon-black"
        ref={ref}
        onMouseMove={(e) => onMouseMoveTitleHandler(e)}
      >
        <p className="">404</p>
        404
      </h1>

      <Link href={"/"}>
        {" "}
        <Button className="bg-zinc-900" size={"lg"} variant={"outline"}>
          Let me out
        </Button>
      </Link>
    </section>
  );
}
