import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
export const NoteSearch = props => {
  return (
    <FormGroup>
      <FormControl
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.filterList}
      />
    </FormGroup>
  );
};
