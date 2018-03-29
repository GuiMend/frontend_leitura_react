import React, { Component } from "react";
import "./style.css";

import CommentForm from "../CommentForm";

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      body: ""
    };
  }
  render() {
    if (!this.props.post) return <div />;
    return (
      <div className="Post">
        <CommentForm
          {...this.state}
          handleChange={this.handleChange}
          createNewComment={this.createNewComment}
        />
      </div>
    );
  }

  handleChange = (value, prop) => {
    this.setState({ [prop]: value });
  };

  createNewComment = event => {
    event.preventDefault();
    const body = {
      ...this.state,
      timestamp: Date.now(),
      id: "" + Math.floor(Math.random() * 1000000000),
      parentId: this.props.post.id
    };
    this.setState({ author: "", body: "" });
    this.props.createComment(body);
  };
}

export default NewComment;
