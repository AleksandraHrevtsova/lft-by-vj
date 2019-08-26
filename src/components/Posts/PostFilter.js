import React from 'react';
import PropTypes from 'prop-types';
import classes from './PostFilter.module.css';

const PostFilter = ({ value, onChangeFilter }) => (
  <input
    type="text"
    className={classes.input}
    value={value}
    onChange={onChangeFilter}
    placeholder="Type to filter posts..."
  />
);

PostFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default PostFilter;
