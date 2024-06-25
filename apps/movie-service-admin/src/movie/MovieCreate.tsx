import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GenreTitle } from "../genre/GenreTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const MovieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="genre.id" reference="Genre" label="genre">
          <SelectInput optionText={GenreTitle} />
        </ReferenceInput>
        <TextInput
          label="movieDescription"
          multiline
          source="movieDescription"
        />
        <TextInput
          label="movieDescriptionX1"
          multiline
          source="movieDescriptionX1"
        />
        <TextInput label="movieGenre" source="movieGenre" />
        <NumberInput label="movieRating" source="movieRating" />
        <NumberInput label="movieRatingX1" source="movieRatingX1" />
        <DateTimeInput label="movieReleaseDate" source="movieReleaseDate" />
        <DateTimeInput label="movieReleaseDateX1" source="movieReleaseDateX1" />
        <TextInput label="movieTitle" source="movieTitle" />
        <TextInput label="posterUrl" source="posterUrl" />
        <NumberInput label="rating" source="rating" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
