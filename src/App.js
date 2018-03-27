import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowAllPosts from "./containers/ShowAllPosts";
import PostPage from "./containers/PostPage";
import { Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={ShowAllPosts} />
        <Route exact path="/category/:categoryName" component={ShowAllPosts} />
        <Route path="/category/:categoryName/post/:id" component={PostPage} />
      </div>
    );
  }
}

export default App;
