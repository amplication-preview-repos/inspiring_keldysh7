import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  movieId?: SortOrder;
  movieReviewed?: SortOrder;
  rating?: SortOrder;
  reviewContent?: SortOrder;
  reviewedMovie?: SortOrder;
  reviewer?: SortOrder;
  reviewRating?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userReviewer?: SortOrder;
};
