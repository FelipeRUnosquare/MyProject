import React from "react";
import styles from './posts.module.sass'

const PostItem = (props) => {
  return (
    <React.Fragment>
      <div className={styles.post}>
        <h1 className={styles['post-title']}>{props.title}</h1>
        <div className={styles['post-body']}>{props.body}</div>
      </div>
    </React.Fragment>
  );
};

export default PostItem;
