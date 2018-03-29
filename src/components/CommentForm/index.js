import React from "react";

const CommentForm = ({
  author = null,
  body,
  handleChange,
  createNewComment,
  edit = false
}) => (
  <form>
    {author !== null && (
      <div className="New-Post-content">
        Author:
        <input
          className="New-Post-content-input"
          type="text"
          name="author"
          value={author}
          onChange={e => handleChange(e.target.value, "author")}
        />
      </div>
    )}
    <div className="New-Post-content">
      Body:
      <input
        className="New-Post-content-input"
        type="text"
        name="body"
        value={body}
        onChange={e => handleChange(e.target.value, "body")}
      />
    </div>
    {edit && <button onClick={e => handleChange(false, "edit")}>Cancel</button>}
    <input type="submit" onClick={e => createNewComment(e)} />
  </form>
);

export default CommentForm;
