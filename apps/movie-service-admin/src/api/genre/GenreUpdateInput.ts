import { MovieUpdateManyWithoutGenresInput } from "./MovieUpdateManyWithoutGenresInput";

export type GenreUpdateInput = {
  movies?: MovieUpdateManyWithoutGenresInput;
  name?: string | null;
};
