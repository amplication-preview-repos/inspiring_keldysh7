import { Movie as TMovie } from "../api/movie/Movie";

export const MOVIE_TITLE_FIELD = "movieTitle";

export const MovieTitle = (record: TMovie): string => {
  return record.movieTitle?.toString() || String(record.id);
};
