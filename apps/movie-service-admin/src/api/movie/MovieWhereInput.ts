import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type MovieWhereInput = {
  description?: StringNullableFilter;
  genre?: GenreWhereUniqueInput;
  id?: StringFilter;
  movieDescription?: StringNullableFilter;
  movieDescriptionX1?: StringNullableFilter;
  movieGenre?: StringNullableFilter;
  movieRating?: FloatNullableFilter;
  movieRatingX1?: FloatNullableFilter;
  movieReleaseDate?: DateTimeNullableFilter;
  movieReleaseDateX1?: DateTimeNullableFilter;
  movieTitle?: StringNullableFilter;
  posterUrl?: StringNullableFilter;
  rating?: FloatNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringNullableFilter;
};
