import React from "react";

const PostForm = ({
  title,
  author = null,
  body,
  handleChange,
  categories,
  createNewPost,
  edit = false
}) => (
  <form>
    {console.log(author)}
    <div className="New-Post-content">
      Title:
      <input
        className="New-Post-content-input"
        type="text"
        name="title"
        value={title}
        onChange={e => handleChange(e.target.value, "title")}
      />
    </div>
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
    {!edit && (
      <select onChange={e => handleChange(e.target.value, "category")}>
        {categories.map((_, i) => (
          <option key={i} value={_.path}>
            {_.name}
          </option>
        ))}
      </select>
    )}
    {edit && <button onClick={e => handleChange(false, "edit")}>Cancel</button>}
    <input type="submit" onClick={e => createNewPost(e)} />
  </form>
);

export default PostForm;
