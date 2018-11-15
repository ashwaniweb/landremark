import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import ButtonType from "./common/buttonType";
import FieldGroup from "./common/fieldGroup";
export const Login = props => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Form>
          <FieldGroup
            name="title"
            type="text"
            placeholder="Note Title"
            className="form-control"
            onChange={props.handleChange}
          />
          <FieldGroup
            name="des"
            type="text"
            placeholder="Note Description"
            className="form-control"
            onChange={props.handleChange}
          />
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
          />
        </Form>
      </Col>
    </Row>
  );
};
