import { Movie } from "../movie/Movie";
import { User } from "../user/User";

export type Review = {
  content: string | null;
  createdAt: Date;
  id: string;
  movie?: Movie | null;
  movieReviewed: string | null;
  rating: number | null;
  reviewContent: string | null;
  reviewedMovie: string | null;
  reviewer: string | null;
  reviewRating: number | null;
  updatedAt: Date;
  user?: User | null;
  userReviewer: string | null;
};
