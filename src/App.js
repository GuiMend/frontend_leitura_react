import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowAllPosts from "./containers/ShowAllPosts";
import SinglePost from "./containers/SinglePost";
import NewPost from "./containers/NewPost";
import { Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={ShowAllPosts} />
        <Route exact path="/category/:categoryName" component={ShowAllPosts} />
        <Route path="/category/:categoryName/post/:id" component={SinglePost} />
        <NewPost />
      </div>
    );
  }
}

export default App;
