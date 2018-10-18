import React from "react";
import { FormGroup, Button, Form, Modal } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
let AddModal = props => {
  const { handleSubmit } = props;
  return (
    <Modal show={props.addShow}>
      {props.markers.position && (
        <Form onSubmit={handleSubmit(val => console.log(val))}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Note Title"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="des"
                component="input"
                type="text"
                placeholder="Note Description"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="position"
                component="input"
                type="text"
                placeholder="Note Location(Lat,Lng)"
                className="form-control"
                defaultValue={props.markers.position.let}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" name="submit" className="btn btn-primary">
              Submit
            </Button>
            <Button
              onClick={() => props.addNotes(false)}
              className="btn btn-danger"
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Modal>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AddModal = reduxForm({
  form: "AddNote" // a unique identifier for this form
})(AddModal);

// You have to connect() to any reducers that you wish to connect to yourself
AddModal = connect(state => ({
  initialValues: state.currentLocation.markers // pull initial values from account reducer
}))(AddModal);

export default AddModal;

// export default reduxForm({
//   // a unique name for the form
//   form: "AddNote",
//   enableReinitialize: true
// })(AddModal);
