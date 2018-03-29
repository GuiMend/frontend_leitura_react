import React, { Component } from "react";
import { connect } from "react-redux";

import { postAction } from "../../redux/actions";
import PostForm from "../../components/PostForm";
import "./style.css";

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      author: ""
    };
  }
  render() {
    return (
      <div id="new-post-container" className="New-Post">
        <h4>
          New Post
          <button
            className="New-Post-Header-Button"
            onClick={() =>
              (document.getElementById("new-post-container").style.display =
                "none")
            }
          >
            close
          </button>
          <button
            className="New-Post-Header-Button"
            onClick={() =>
              this.setState({
                id: "",
                title: "",
                body: "",
                author: "",
                category: "",
                timestamp: ""
              })
            }
          >
            reset
          </button>
        </h4>
        <div>
          <PostForm
            {...this.state}
            handleChange={this.handleChange}
            categories={this.props.categories}
            createNewPost={this.createNewPost}
          />
        </div>
      </div>
    );
  }

  createNewPost = event => {
    event.preventDefault();
    const post = this.state;
    post.id = "" + Math.floor(Math.random() * 1000000000);
    post.timestamp = Date.now();
    post.category = post.category
      ? post.category
      : this.props.categories[0].path;
    this.props.createPost(post);
  };

  handleChange = (value, prop) => {
    this.setState({ [prop]: value });
  };
}

const mapStateToProps = state => ({
  categories: state.category.categories
});

const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(postAction.createNewPostAction(newPost))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
