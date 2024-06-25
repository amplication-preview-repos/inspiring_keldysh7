import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MovieTitle } from "../movie/MovieTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
