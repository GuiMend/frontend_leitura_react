import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import * as CONSTANTS from "../../util";
import { commentAction, postAction } from "../../redux/actions";
import Post from "../../components/Post";
import Comment from "../../components/Comment";
import NewComment from "../../components/NewComment";
import "./style.css";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getPostComments(this.props.match.params.id);
  }

  render() {
    const {
      posts,
      votePost,
      comments,
      voteComment,
      deletePost,
      createComment,
      deleteComment
    } = this.props;
    const currentPost = posts.filter(_ => _.id === this.props.match.params.id);
    return (
      <div className="Body">
        <Post {...currentPost[0]} votePost={votePost} deletePost={deletePost} />
        <h4>Comments</h4>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            {...comment}
            voteComment={voteComment}
            deleteComment={deleteComment}
          />
        ))}
        {comments.length === 0 && (
          <div className="No-Posts">No comments to show</div>
        )}
        <NewComment post={currentPost[0]} createComment={createComment} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comment.comments,
  posts: state.post.posts
});

const mapDispatchToProps = dispatch => ({
  voteComment: (id, body) =>
    dispatch(commentAction.voteCommentAction(id, body)),
  createComment: body => dispatch(commentAction.createCommentAction(body)),
  getPostComments: id => dispatch(commentAction.getPostCommentsAction(id)),
  deleteComment: id => dispatch(commentAction.deleteCommentAction(id)),
  votePost: (id, body) => dispatch(postAction.votePostAction(id, body)),
  deletePost: id => dispatch(postAction.deletePostAction(id))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SinglePost);
