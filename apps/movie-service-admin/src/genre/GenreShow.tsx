import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GENRE_TITLE_FIELD } from "./GenreTitle";

export const GenreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Movie" target="genreId" label="Movies">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
