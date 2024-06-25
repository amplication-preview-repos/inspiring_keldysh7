import { Movie } from "../movie/Movie";

export type Genre = {
  createdAt: Date;
  id: string;
  movies?: Array<Movie>;
  name: string | null;
  updatedAt: Date;
};
