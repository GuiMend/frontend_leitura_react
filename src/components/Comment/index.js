import React from "react";
import * as CONSTANTS from "../../util";
import "./style.css";

const Post = ({
  id,
  author,
  timestamp,
  body,
  voteScore,
  category,
  voteComment
}) => (
  <div className="Post">
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
    </span>
  </div>
);

export default Post;
