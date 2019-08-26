import React from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from './PrioritySelector';
import Priority from '../../utils/Priority';
import styles from './Post.module.css';

const options = Object.values(Priority);

const Post = ({
  id,
  text,
  priority,
  completed,
  onDeletePost,
  onUpdateCompleted,
  onUpdatePriority,
}) => (
  <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <button type="button" onClick={onDeletePost}>
        Delete
      </button>

      <PrioritySelector
        options={options}
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />

      <label>
        Completed:
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={onUpdateCompleted}
        />
      </label>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default Post;
