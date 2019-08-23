import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ text, priority, completed }) => (
  <div>
    <p>{text}</p>

    <hr />
    <div>
      <button type="button">Delete</button>

      <select name="priority" value={priority}>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>

      <label>
        completed
        <input type="checkbox" checked={completed} />
      </label>
    </div>
  </div>
);

Post.propTypes = {
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Post;
