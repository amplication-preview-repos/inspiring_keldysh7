import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GENRE_TITLE_FIELD } from "../genre/GenreTitle";

export const MovieList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Movies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="genre" source="genre.id" reference="Genre">
          <TextField source={GENRE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="movieDescription" source="movieDescription" />
        <TextField label="movieDescriptionX1" source="movieDescriptionX1" />
        <TextField label="movieGenre" source="movieGenre" />
        <TextField label="movieRating" source="movieRating" />
        <TextField label="movieRatingX1" source="movieRatingX1" />
        <TextField label="movieReleaseDate" source="movieReleaseDate" />
        <TextField label="movieReleaseDateX1" source="movieReleaseDateX1" />
        <TextField label="movieTitle" source="movieTitle" />
        <TextField label="posterUrl" source="posterUrl" />
        <TextField label="rating" source="rating" />
        <TextField label="releaseDate" source="releaseDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
