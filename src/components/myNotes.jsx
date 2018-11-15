import React from "react";
import { Row, Col } from "react-bootstrap";
import { NotesTitle } from "./common/notesTitle";
import { NotesList } from "./common/notesList";
import MapContainer from "../containers/map";
export const MyNotes = props => {
  return (
    <Row>
      <Col xs={12} md={3}>
        <NotesTitle title="My Notes" />
        <NotesList Title="My Notes" NotesList={props.MyNotes} myKey={"notes"} />
      </Col>
      <Col xs={12} md={9}>
        <MapContainer NotesData={props.MyNotes} />
      </Col>
    </Row>
  );
};
