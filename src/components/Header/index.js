import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import {
  getAllCategoriesAction,
  getAllPostsAction
} from "../../reducers/actions";
import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1
    };
  }

  componentDidMount() {
    if (this.props.categories.length === 0) this.props.getAllCategories();
    this.props.getAllPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location) {
      const value = nextProps.categories.findIndex(_ =>
        nextProps.location.pathname.includes(_.path)
      );
      this.setState({ value });
    }
  }

  render() {
    const { categories, posts } = this.props;
    const { value } = this.state;
    return (
      <div>
        <div className="Header">
          <h1>My Readable</h1>
        </div>
        <div className="Tabs">
          <Link
            to={{
              pathname: "/",
              state: { posts: posts }
            }}
            className="Tab-button"
            onClick={() => this.setState({ value: -1 })}
          >
            <p className="Tab-name">ALL</p>
            {value === -1 && <div className="selected" />}
          </Link>
          {categories.map((tab, index) => (
            <Link
              key={tab.name}
              to={{
                pathname: `/category/${tab.path}`,
                state: { posts: posts.filter(_ => _.category === tab.name) }
              }}
              className="Tab-button"
              onClick={() => this.setState({ value: index })}
            >
              <p className="Tab-name">{tab.name.toUpperCase()}</p>
              {value === index && <div className="selected" />}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPostsAction()),
  getAllCategories: () => dispatch(getAllCategoriesAction())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Header);
