import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MovieTitle } from "../movie/MovieTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="movie.id" reference="Movie" label="Movie">
          <SelectInput optionText={MovieTitle} />
        </ReferenceInput>
        <TextInput label="movieReviewed" source="movieReviewed" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="reviewContent" multiline source="reviewContent" />
        <TextInput label="ReviewedMovie" source="reviewedMovie" />
        <TextInput label="Reviewer" source="reviewer" />
        <NumberInput label="reviewRating" source="reviewRating" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="userReviewer" source="userReviewer" />
      </SimpleForm>
    </Create>
  );
};
