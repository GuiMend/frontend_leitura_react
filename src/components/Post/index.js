import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as CONSTANTS from "../../util";
import "./style.css";

import { postAction } from "../../redux/actions";
import PostForm from "../PostForm";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      title: "",
      body: ""
    };
  }

  render() {
    const {
      id,
      title,
      author,
      timestamp,
      body,
      commentCount,
      voteScore,
      category,
      votePost,
      deletePost
    } = this.props;

    if (!id) return <div>Post does not exist</div>;

    if (this.state.edit) {
      return (
        <div className="Post">
          <PostForm
            {...this.state}
            handleChange={this.handleChange}
            categories={this.props.categories}
            createNewPost={this.updatePost}
          />
        </div>
      );
    }
    return (
      <div className="Post">
        <div>
          <button
            className="Post-header-button"
            onClick={() => {
              this.setState({
                edit: true,
                title: title,
                body: body,
                id: id
              });
            }}
          >
            Edit
          </button>
          <Link
            to={{
              pathname: `/${category}/${id}`,
              state: { post_id: id }
            }}
          >
            <h4>
              {title} (Category: {category})
            </h4>
          </Link>
        </div>
        <h5 className="Author">
          By: {author} - {CONSTANTS.getDate(timestamp)}
        </h5>
        <p>{body}</p>
        <span className="Post-footer">
          <span>
            Votes: {voteScore}{" "}
            <button
              className="Post-footer-button"
              onClick={() => votePost(id, "upVote")}
            >
              Up
            </button>
            <button
              className="Post-footer-button"
              onClick={() => votePost(id, "downVote")}
            >
              Down
            </button>
          </span>
          <span>Comments: {commentCount}</span>
          <button
            className="Post-footer-button"
            onClick={() => {
              deletePost(id);
            }}
          >
            Delete
          </button>
        </span>
      </div>
    );
  }

  updatePost = event => {
    event.preventDefault();
    const { id } = this.state;
    const body = {
      title: this.state.title,
      body: this.state.body
    };
    this.setState({ edit: false });
    this.props.updatePost(id, body);
  };

  handleChange = (value, prop) => {
    this.setState({ [prop]: value });
  };
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
  updatePost: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  updatePost: (id, body) => dispatch(postAction.updatePost(id, body))
});

export default connect(null, mapDispatchToProps)(Post);
