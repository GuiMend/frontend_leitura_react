import React from "react";
import { Link } from "react-router-dom";
import * as CONSTANTS from "../../util";
import "./style.css";

const Post = ({
  id,
  title,
  author,
  timestamp,
  body,
  commentCount,
  voteScore,
  category,
  votePost
}) => (
  <div className="Post">
    <Link
      to={{
        pathname: `/category/${category}/post/${id}`,
        state: { post_id: id }
      }}
    >
      <h4>
        {title} (Category: {category})
      </h4>
    </Link>
    <h5 className="Author">
      By: {author} - {CONSTANTS.getDate(timestamp)}
    </h5>
    <p>{body}</p>
    <span className="Post-footer">
      <span>Comments: {commentCount}</span>
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
    </span>
  </div>
);

export default Post;
