import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "movieReviewed";

export const ReviewTitle = (record: TReview): string => {
  return record.movieReviewed?.toString() || String(record.id);
};
