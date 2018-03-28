import React, { Component } from "react";
import { connect } from "react-redux";

import * as CONSTANTS from "../../util";
import { createNewPostAction } from "../../reducers/actions";
import Post from "../../components/Post";
import Comment from "../../components/Comment";
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
          <form>
            <div className="New-Post-content">
              Title:
              <input
                className="New-Post-content-input"
                type="text"
                name="title"
                value={this.state.title}
                onChange={e => this.handleChange(e.target.value, "title")}
              />
            </div>
            <div className="New-Post-content">
              Author:
              <input
                className="New-Post-content-input"
                type="text"
                name="author"
                value={this.state.author}
                onChange={e => this.handleChange(e.target.value, "author")}
              />
            </div>
            <div className="New-Post-content">
              Body:
              <input
                className="New-Post-content-input"
                type="text"
                name="body"
                value={this.state.body}
                onChange={e => this.handleChange(e.target.value, "body")}
              />
            </div>
            <select
              onChange={e => this.handleChange(e.target.value, "category")}
            >
              {this.props.categories.map((_, i) => (
                <option key={i} value={_.path}>
                  {_.name}
                </option>
              ))}
            </select>
            <input
              type="submit"
              onClick={() => this.createNewPost(this.state, this.props)}
            />
          </form>
        </div>
      </div>
    );
  }

  createNewPost = (post, props) => {
    post.id = "" + Math.floor(Math.random() * 1000000000);
    post.timestamp = Date.now();
    post.category = post.category ? post.category : props.categories[0].path;
    props.createPost(post);
  };

  handleChange = (value, prop) => {
    this.setState({ [prop]: value });
  };
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createNewPostAction(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
