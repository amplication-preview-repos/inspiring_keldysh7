import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  content?: string | null;
  movie?: MovieWhereUniqueInput | null;
  movieReviewed?: string | null;
  rating?: number | null;
  reviewContent?: string | null;
  reviewedMovie?: string | null;
  reviewer?: string | null;
  reviewRating?: number | null;
  user?: UserWhereUniqueInput | null;
  userReviewer?: string | null;
};
