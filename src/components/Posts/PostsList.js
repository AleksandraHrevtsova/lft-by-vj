import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

// import { connect } from "react-redux";
// import * as postsActions from "../../store/posts/actions";

const PostsList = ({ items }) =>
  items.length > 0 && (
    <ul>
      {items.map(item => (
        <li>
          <Post {...items} />
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
};

export default PostsList;
