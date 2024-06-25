import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  genreId?: SortOrder;
  id?: SortOrder;
  movieDescription?: SortOrder;
  movieDescriptionX1?: SortOrder;
  movieGenre?: SortOrder;
  movieRating?: SortOrder;
  movieRatingX1?: SortOrder;
  movieReleaseDate?: SortOrder;
  movieReleaseDateX1?: SortOrder;
  movieTitle?: SortOrder;
  posterUrl?: SortOrder;
  rating?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
