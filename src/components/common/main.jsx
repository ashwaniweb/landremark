import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { myNotes } from "../../actions/myNotes";
import Home from "../home";
import { MyNotes } from "../myNotes";
import OtherNotes from "../otherNotes";
import { AddModal } from "../common/modal";
import { withRouter } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //Here ya go
    this.props.history.listen((location, action) => {
      if (location.pathname === "/my-notes") {
        this.props.myNotes({
          myNotes: this.props.NotesData
        });
      }
    });
  }
  render() {
    return (
      <Grid fluid>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home NotesData={this.props.markers} {...this.props} />
            )}
          />
          <Route
            path="/my-notes"
            render={() => (
              <MyNotes MyNotes={this.props.MyNotes} {...this.props} />
            )}
          />
          <Route
            path="/others-notes"
            render={() => (
              <OtherNotes NotesData={this.props.NotesData} {...this.props} />
            )}
          />
        </Switch>
        <AddModal markers={this.props.markers} />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    MyNotes: state.myNotes.myNotes
  };
};
const mapDispatchToProps = {
  myNotes
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
