import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import * as CONSTANTS from "../../util";
import { getAllPostsAction, votePostAction } from "../../reducers/actions";
import Post from "../../components/Post";
import "./style.css";

class ShowAllPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  componentWillReceiveProps(nextProps) {
    const posts = nextProps.location.state
      ? nextProps.location.state.posts
      : nextProps.posts;
    this.setState({ posts: posts });
  }

  render() {
    const { posts } = this.state;
    const { votePost } = this.props;

    return (
      <div className="Body">
        <div className="Body-header">
          <Link to="/new-post" className="Body-header-button">
            New Post
          </Link>
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
        {posts.map(post => (
          <Post key={post.id} {...post} votePost={votePost} />
        ))}
        {posts.length === 0 && (
          <div className="No-Posts">No posts to show :(</div>
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
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPostsAction()),
  votePost: (id, body) => dispatch(votePostAction(id, body))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ShowAllPosts);
