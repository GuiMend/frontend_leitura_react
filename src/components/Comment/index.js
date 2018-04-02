import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as CONSTANTS from "../../util";
import "./style.css";

import { commentAction } from "../../redux/actions";
import CommentForm from "../CommentForm";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      body: ""
    };
  }
  render() {
    const {
      id,
      author,
      timestamp,
      body,
      voteScore,
      voteComment,
      deleteComment
    } = this.props;

    if (this.state.edit) {
      return (
        <div className="Post">
          <CommentForm
            {...this.state}
            handleChange={this.handleChange}
            createNewComment={this.updateComment}
          />
        </div>
      );
    }
    return (
      <div className="Post">
        <button
          className="Post-header-button"
          onClick={() => {
            this.setState({
              edit: true,
              body: body,
              id: id
            });
          }}
        >
          Edit
        </button>
        <p>{body}</p>
        <p className="Author">
          By: {author} - {CONSTANTS.getDate(timestamp)}
        </p>
        <span className="Post-footer">
          <span>
            Votes: {voteScore}{" "}
            <button
              className="Post-footer-button"
              onClick={() => voteComment(id, "upVote")}
            >
              Up
            </button>
            <button
              className="Post-footer-button"
              onClick={() => voteComment(id, "downVote")}
            >
              Down
            </button>
          </span>
          <button
            className="Post-footer-button"
            onClick={() => {
              deleteComment(id);
            }}
          >
            Delete
          </button>
        </span>
      </div>
    );
  }

  updateComment = event => {
    event.preventDefault();
    this.setState({ edit: false });
    const { id } = this.state;
    const body = {
      body: this.state.body,
      timestamp: Date.now()
    };
    this.props.updateComment(id, body);
  };

  handleChange = (value, prop) => {
    this.setState({ [prop]: value });
  };
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
  updateComment: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  updateComment: (id, body) => dispatch(commentAction.updateComment(id, body))
});

export default connect(null, mapDispatchToProps)(Comment);
