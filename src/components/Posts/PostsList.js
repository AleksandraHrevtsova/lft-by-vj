import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = ({
  items,
  onDeletePost,
  onUpdateComleted,
  onUpdatePriority,
}) =>
  items.length > 0 && (
    <ul className={classes.list}>
      {items.map(item => (
        <li key={item.id}>
          <Post
            {...item}
            onDeletePost={() => onDeletePost(item.id)}
            onUpdateComleted={() => onUpdateComleted(item.id)}
            onUpdatePriority={onUpdatePriority}
          />
        </li>
      ))}
    </ul>
  );

PostsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeletePost: PropTypes.func.isRequired,
  onUpdateComleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default PostsList;
