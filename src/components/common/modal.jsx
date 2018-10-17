import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Form,
  Modal
} from "react-bootstrap";
function FieldGroup({ id, label, help, value, ...props }) {
  return (
    <FormGroup controlId={id}>
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl value={value} {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export const AddModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      {props.markers.position && (
        <Form onSubmit={onsubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FieldGroup
              id="formControlsTitle"
              type="text"
              placeholder="Note Title"
              value={props.markers.title}
              name="title"
              onChange={props.handleChange}
            />
            <FieldGroup
              id="formControlsDesc"
              type="text"
              placeholder="Note Description"
              value={props.markers.des}
              name="des"
              onChange={props.handleChange}
            />
            <FieldGroup
              id="formControlsLocation"
              type="text"
              placeholder="Note Location(Lat,Lng)"
              value={
                props.markers.position.lat + ", " + props.markers.position.lng
              }
              name="position"
              readOnly
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" name="submit" className="btn btn-primary">
              Submit
            </Button>
            <Button onClick={props.addNotes} className="btn btn-danger">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Modal>
  );
};
