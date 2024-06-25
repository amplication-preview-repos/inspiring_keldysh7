import { StringFilter } from "../../util/StringFilter";
import { MovieListRelationFilter } from "../movie/MovieListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GenreWhereInput = {
  id?: StringFilter;
  movies?: MovieListRelationFilter;
  name?: StringNullableFilter;
};
