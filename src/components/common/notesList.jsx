import React from "react";
import { Panel, PanelGroup } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
export const NotesList = props => {
  return (
    <Scrollbars
      style={{ width: "100%", height: "calc(100vh - 180px)" }}
      horizontal={"false"}
      className="scroller">
      <PanelGroup accordion id="accordion-controlled-example">
        {props.NotesList.map((item, index) => (
          <Panel eventKey={props.myKey + index} key={props.myKey + index}>
            <Panel.Heading>
              <Panel.Title toggle>{item.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              {item.des}
              <br />
              <br />
              <span className="h5"> {"By " + item.userName}</span>
            </Panel.Body>
          </Panel>
        ))}
      </PanelGroup>
    </Scrollbars>
  );
};
