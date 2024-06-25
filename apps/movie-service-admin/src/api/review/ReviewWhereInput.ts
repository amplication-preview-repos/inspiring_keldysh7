import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  movie?: MovieWhereUniqueInput;
  movieReviewed?: StringNullableFilter;
  rating?: FloatNullableFilter;
  reviewContent?: StringNullableFilter;
  reviewedMovie?: StringNullableFilter;
  reviewer?: StringNullableFilter;
  reviewRating?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  userReviewer?: StringNullableFilter;
};
