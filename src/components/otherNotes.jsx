import React from "react";
import { Row, Col } from "react-bootstrap";
import { NotesTitle } from "./common/notesTitle";
import { NoteSearch } from "./common/notesSearch";
import { NotesList } from "./common/notesList";
import MapContainer from "../containers/map";
export const OtherNotes = props => {
  return (
    <Row>
      <Col xs={12} md={3}>
        <NotesTitle title="Other Notes" />
        <NoteSearch
          searchNotesText={props.searchNotesText}
          filterList={props.filterList}
        />
        <NotesList NotesList={props.searchData} myKey={"notes"} />
      </Col>
      <Col xs={12} md={9}>
        <MapContainer NotesData={props.searchData} />
      </Col>
    </Row>
  );
};
