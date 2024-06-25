import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MOVIE_TITLE_FIELD } from "../movie/MovieTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Movie" source="movie.id" reference="Movie">
          <TextField source={MOVIE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="movieReviewed" source="movieReviewed" />
        <TextField label="rating" source="rating" />
        <TextField label="reviewContent" source="reviewContent" />
        <TextField label="ReviewedMovie" source="reviewedMovie" />
        <TextField label="Reviewer" source="reviewer" />
        <TextField label="reviewRating" source="reviewRating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="userReviewer" source="userReviewer" />
      </Datagrid>
    </List>
  );
};
