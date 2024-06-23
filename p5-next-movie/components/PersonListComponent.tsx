import { Person } from "@/lib/types";
import { notFound } from "next/navigation";
import CardPersonComponent from "./CardPersonComponent";

type personListParams = {
  people: Person[] | null;
};

export default function PersonListComponent(
  personListParams: personListParams
) {
  const { people } = personListParams;
  if (!people) return notFound();
  return people.map((person) => (
    <CardPersonComponent params={person} key={person.id}></CardPersonComponent>
  ));
}
