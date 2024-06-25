import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";
import { ReviewUpdateManyWithoutMoviesInput } from "./ReviewUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  description?: string | null;
  genre?: GenreWhereUniqueInput | null;
  movieDescription?: string | null;
  movieDescriptionX1?: string | null;
  movieGenre?: string | null;
  movieRating?: number | null;
  movieRatingX1?: number | null;
  movieReleaseDate?: Date | null;
  movieReleaseDateX1?: Date | null;
  movieTitle?: string | null;
  posterUrl?: string | null;
  rating?: number | null;
  releaseDate?: Date | null;
  reviews?: ReviewUpdateManyWithoutMoviesInput;
  title?: string | null;
};
