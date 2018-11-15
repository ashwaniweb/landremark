import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import {
  myNotesAction,
  handleChange,
  defaultData,
  searchNotes
} from "../actions";
import Home from "../components/home";
import AddModal from "../components/common/modal";
import { MyNotes } from "../components/myNotes";
import { OtherNotes } from "../components/otherNotes";
import { Login } from "../components/login";
import { SignUp } from "../components/signup";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitNote = this.submitNote.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  componentWillMount() {
    //Here you go
    this.props.history.listen(location => {
      switch (location.pathname) {
        case "/my-notes":
          this.props.myNotesAction({
            myNotes: this.props.NotesData
          });
          break;
        case "/others-notes":
          this.props.searchNotes({
            searchData: this.props.NotesData
          });
          break;
        default:
          break;
      }
    });
  }
  submitNote = e => {
    e.preventDefault();
    const markers = this.props.addNotes.formData;
    // Check browser support
    if (typeof Storage !== "undefined") {
      // Store
      const setDataLocal = {
        title: markers.title,
        des: markers.des,
        position: markers.position
      };

      // Put the object into storage
      try {
        var data = [];
        data = JSON.parse(localStorage.getItem("testData"));
        data.push(setDataLocal);
        localStorage.setItem("testData", JSON.stringify(data));
        this.props.addNotesModal(false);
        this.props.defaultData({
          NotesData: JSON.parse(localStorage.getItem("testData"))
        });
        this.resetInput();
      } catch (exception) {}
    }
  };

  filterList = e => {
    let updatedList = this.props.NotesData;
    const searchVal = e.target.value;
    this.props.searchNotes({
      searchNotesText: e.target.value
    });
    updatedList = updatedList.filter(item => {
      return (
        item.title.toLowerCase().search(searchVal.toLowerCase()) !== -1 ||
        item.des.toLowerCase().search(searchVal.toLowerCase()) !== -1
      );
    });
    this.props.searchNotes({
      searchData: updatedList
    });
  };

  render() {
    return (
      <Grid fluid>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => (
              <Login NotesData={this.props.markers} {...this.props} />
            )}
          />
          <Route
            exact
            path="/sign-up"
            render={() => (
              <SignUp NotesData={this.props.markers} {...this.props} />
            )}
          />
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
              <OtherNotes
                searchData={this.props.searchData}
                searchNotesText={this.props.searchNotesText}
                filterList={this.filterList}
                {...this.props}
              />
            )}
          />
        </Switch>
        <AddModal
          addNotes={this.props.addNotes}
          showNotesModal={this.props.showNotesModal}
          formData={this.props.addNotes.formData}
          NotesData={this.props.markers}
          handleChange={this.props.handleChange}
          onSubmit={this.submitNote}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    MyNotes: state.myNotes.myNotes,
    addNotes: state.addNotes,
    searchNotesText: state.searchNotes.searchNotesText,
    searchData: state.searchNotes.searchData,
    NotesData: state.onLoad.NotesData,
    showNotesModal: state.addNotesModal.show
  };
};
const mapDispatchToProps = {
  myNotesAction,
  handleChange,
  defaultData,
  searchNotes
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
