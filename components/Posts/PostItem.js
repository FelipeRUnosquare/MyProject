import { useRouter } from "next/router";
import React, { useContext } from "react";
import DataContext from "../../store/data-context";
import PostButtons from "./PostButtons";
import styles from "./posts.module.sass";

const PostItem = (props) => {
  const dataCtx = useContext(DataContext);
  const router = useRouter();
  const handleDeletePost = () => {
    dataCtx.onWarningDeletePost(props.id);
  };
  const handleEditPost = () => {
    router.push(`/posts/${props.id}`)
    
  };

  return (
    <React.Fragment>
      <div className={styles.post}>
      <h1 className={styles["post-title"]}>{props.title}</h1>
      <div className={styles["post-body"]}>{props.body}</div>
      <div className={styles["post-actions"]}>
        <PostButtons
          onDeletePost={handleDeletePost}
          onEditPost={handleEditPost}
        />
      </div>
      </div>
    </React.Fragment>
  );
};

export default PostItem;
