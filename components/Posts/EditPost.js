import { useContext, useState } from "react";
import DataContext from "../../store/data-context";
import styles from "./posts.module.sass";

const EditPost = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const dataCtx = useContext(DataContext);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleEditPost = () => {
    let NewData = {
      id: props.id,
      title,
      body,
    };
    dataCtx.onEditPost(NewData);
  };
  return (
    <div className={styles.post}>
      <div className={styles["edit-form"]}>
        <label>Title</label>
        <textarea
          className={styles.input}
          value={title}
          onChange={handleChangeTitle}
        ></textarea>
        <label>Post</label>
        <textarea
          className={styles.input}
          value={body}
          onChange={handleChangeBody}
        ></textarea>
        <button className={styles.button} onClick={handleEditPost}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditPost;
