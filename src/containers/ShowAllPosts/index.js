import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import * as CONSTANTS from "../../util";
import { postAction } from "../../redux/actions";
import Post from "../../components/Post";
import "./style.css";

class ShowAllPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { votePost, deletePost, posts, match } = this.props;
    let displayPosts = match.params.categoryName
      ? posts.filter(post => post.category === match.params.categoryName)
      : posts;
    return (
      <div className="Body">
        <div className="Body-header">
          <button
            onClick={() =>
              (document.getElementById("new-post-container").style.display =
                "block")
            }
          >
            New Post
          </button>
          Sort by:
          <button
            className="Body-header-button"
            onClick={() => this.sortBy("voteScore", posts)}
          >
            Votes Score
          </button>
          <button
            className="Body-header-button"
            onClick={() => this.sortBy("timestamp", posts)}
          >
            Date
          </button>
        </div>
        {displayPosts.map(post => (
          <Post
            key={post.id}
            {...post}
            votePost={votePost}
            deletePost={deletePost}
          />
        ))}
        {displayPosts.length === 0 && (
          <div className="No-Posts">No posts to show</div>
        )}
      </div>
    );
  }

  sortBy = (option, list) => {
    list.sort((first, second) => {
      if (first[option] < second[option]) return 1;
      if (first[option] > second[option]) return -1;
      return 0;
    });
    this.setState({ posts: list });
  };
}

const mapStateToProps = state => ({
  posts: state.post.posts
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(postAction.getAllPostsAction()),
  votePost: (id, body) => dispatch(postAction.votePostAction(id, body)),
  deletePost: id => dispatch(postAction.deletePostAction(id))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ShowAllPosts);
