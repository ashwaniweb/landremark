import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

export const Menu = props => {
  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            Land Remark
            {/* <img src={"../images/logo.png"} alt="Land Remark" /> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Button
          type="button"
          onClick={() => props.addNotesModal(true)}
          className="mobile-add"
        >
          Add Note
        </Button>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/my-notes">
            <NavItem eventKey={2}>My Notes</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/others-notes">
            <NavItem eventKey={3}>Others Notes</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/login">
            <NavItem eventKey={1}>Login</NavItem>
          </IndexLinkContainer>
        </Nav>
        <Navbar.Form pullRight className="not-mobile-add">
          <Button type="button" onClick={() => props.addNotesModal(true)}>
            Add Note
          </Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
