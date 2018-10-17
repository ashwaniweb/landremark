import React from "react";
import { Row, Col } from "react-bootstrap";
import Map from "../containers/map";
const Home = props => {
  return (
    <Col xs={12} md={12}>
      <Row>
        <Row>
          <Map markers={props.markers} />
        </Row>
      </Row>
    </Col>
  );
};
export default Home;
