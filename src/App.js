import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowAllPosts from "./containers/ShowAllPosts";
import SinglePost from "./containers/SinglePost";
import NewPost from "./containers/NewPost";
import NoMatch from "./containers/NoMatch";
import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ShowAllPosts} />
          <Route exact path="/:categoryName" component={ShowAllPosts} />
          <Route exact path="/:categoryName/:id" component={SinglePost} />
          <Route component={NoMatch} />
        </Switch>
        <NewPost />
      </div>
    );
  }
}

export default App;
