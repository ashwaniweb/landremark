import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
export const NoteSearch = props => {
  return (
    <FormGroup>
      <FormControl
        type="text"
        placeholder="Search"
        value={props.searchNotesText}
        onChange={props.filterList}
        name="searchNotes"
      />
    </FormGroup>
  );
};
