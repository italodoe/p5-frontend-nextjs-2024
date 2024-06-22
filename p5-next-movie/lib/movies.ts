import { env } from "./env";

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env("TMDB_TOKEN")}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/${path}&append_to_response=videos`,
    options
  );
  return await response.json();
};
