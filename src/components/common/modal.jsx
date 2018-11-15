import React from "react";
import { Form, Modal } from "react-bootstrap";
import ButtonType from "./buttonType";
import FieldGroup from "./fieldGroup";

const AddModal = props => {
  return (
    <Modal
      show={props.showNotesModal}
      onHide={() => props.addNotesModal(false)}
    >
      <Form onSubmit={props.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FieldGroup
            name="title"
            type="text"
            placeholder="Note Title"
            className="form-control"
            onChange={props.handleChange}
            value={props.formData.title}
          />
          <FieldGroup
            name="des"
            type="text"
            placeholder="Note Description"
            className="form-control"
            onChange={props.handleChange}
            value={props.formData.des}
          />
          <FieldGroup
            name="position"
            type="hidden"
            placeholder="Note Location(Lat,Lng)"
            className="form-control"
            value={props.NotesData.position}
          />
        </Modal.Body>
        <Modal.Footer>
          <ButtonType
            type="submit"
            name="submit"
            className="btn btn-primary"
            text="Submit"
          />
          <ButtonType
            type="button"
            name="close"
            className="btn btn-danger"
            text="Close"
            onClick={() => props.addNotesModal(false)}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddModal;
