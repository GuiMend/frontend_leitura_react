import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import * as CONSTANTS from "../../util";
import {
  getPostCommentsAction,
  voteCommentAction,
  votePostAction
} from "../../reducers/actions";
import Post from "../../components/Post";
import Comment from "../../components/Comment";
import "./style.css";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getPostComments(this.props.match.params.id);
  }

  render() {
    const { posts, votePost, comments, voteComment } = this.props;
    const currentPost = posts.filter(_ => _.id === this.props.match.params.id);
    return (
      <div className="Body">
        <Post {...currentPost[0]} votePost={votePost} />
        <h4>Comments</h4>
        {comments.map(comment => (
          <Comment key={comment.id} {...comment} voteComment={voteComment} />
        ))}
        {comments.length === 0 && (
          <div className="No-Posts">No comments to show :(</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getPostComments: id => dispatch(getPostCommentsAction(id)),
  voteComment: id => dispatch(voteCommentAction(id)),
  votePost: (id, body) => dispatch(votePostAction(id, body))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SinglePost);
