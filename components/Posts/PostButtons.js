import React from "react";
import styles from "./posts.module.sass";

const PostButtons = (props) => {
  return (
    <React.Fragment>
      <button className={styles["button-delete"]} onClick={props.onDeletePost}>
        Delete
      </button>
      <button className={styles["button-edit"]} onClick={props.onEditPost}>
        Edit
      </button>
    </React.Fragment>
  );
};

export default PostButtons;
