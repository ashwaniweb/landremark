import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { myNotes } from "../actions/myNotes";
import { addNotes } from "../actions/addNotes";
import Home from "../components/home";
import { MyNotes } from "../components/myNotes";
import OtherNotes from "../components/otherNotes";
import AddModal from "../components/common/modal";
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
        <AddModal
          markers={this.props.markers}
          addShow={this.props.addShow}
          addNotes={this.props.addNotes}
          onSubmit={this.props.submitNote}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    MyNotes: state.myNotes.myNotes,
    addNotes: state.addNotes.show
  };
};
const mapDispatchToProps = {
  myNotes,
  addNotes
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
