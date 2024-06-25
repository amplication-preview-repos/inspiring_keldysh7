import { MovieCreateNestedManyWithoutGenresInput } from "./MovieCreateNestedManyWithoutGenresInput";

export type GenreCreateInput = {
  movies?: MovieCreateNestedManyWithoutGenresInput;
  name?: string | null;
};
