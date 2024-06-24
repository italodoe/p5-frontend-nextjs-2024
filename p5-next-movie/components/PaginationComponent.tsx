"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

type pageParams = {
  actual: number | undefined;
  totalPages: number;
  term: string | null;
};

export default function PaginationComponent(pageParams: pageParams) {
  const { totalPages, actual, term } = pageParams;
  const router = useRouter();
  const onClickHandler = (page: number) => {
    let query = "?";
    if (term) query = `?query=${term}&`;

    const route = `${query}page=${page}`;
    router.replace(route);
  };
  const max = 5;
  const numberOfPages = totalPages < max ? totalPages : max;
  return (
    <Pagination>
      <PaginationContent>
        {Array.from({ length: numberOfPages }).map((_, index) => (
          <PaginationItem key={index + 1 + "-pg"}>
            <PaginationLink
              isActive={actual == index + 1 ? true : false}
              onClick={() => onClickHandler(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
