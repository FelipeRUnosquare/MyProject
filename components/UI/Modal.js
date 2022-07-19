import React from "react";
import styles from "./ui.module.sass";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        {props.error ? (
          <h1 className={styles["modal__title__error"]}>Warning</h1>
        ) : (
          <h1 className={styles["modal__title__success"]}>Success</h1>
        )}

        <div className={styles["modal__message"]}>{props.message}</div>
        <div className={styles["modal_buttons"]}>
          <button
            className={styles["modal__button"]}
            type="button"
            onClick={props.onAccept}
          >
            OK
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
