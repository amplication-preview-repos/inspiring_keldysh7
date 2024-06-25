import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MOVIE_TITLE_FIELD } from "./MovieTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { GENRE_TITLE_FIELD } from "../genre/GenreTitle";

export const MovieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Review" target="movieId" label="Reviews">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
