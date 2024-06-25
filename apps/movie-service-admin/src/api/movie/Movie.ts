import { Genre } from "../genre/Genre";
import { Review } from "../review/Review";

export type Movie = {
  createdAt: Date;
  description: string | null;
  genre?: Genre | null;
  id: string;
  movieDescription: string | null;
  movieDescriptionX1: string | null;
  movieGenre: string | null;
  movieRating: number | null;
  movieRatingX1: number | null;
  movieReleaseDate: Date | null;
  movieReleaseDateX1: Date | null;
  movieTitle: string | null;
  posterUrl: string | null;
  rating: number | null;
  releaseDate: Date | null;
  reviews?: Array<Review>;
  title: string | null;
  updatedAt: Date;
};
