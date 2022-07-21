import React, { useState } from "react";
import styles from "./ui.module.sass";

const Modal = (props) => {
  const [classesOpen, setClassesOpen] = useState(true);
  const closeModal = () => {
    setClassesOpen(false);
    props.onCloseModal();
  };

  const acceptAction = () => {
    if (props.warning && !props.error) {
      props.onAcceptAction();
    } else {
      props.onCloseModal();
    }
  };
  return (
    <React.Fragment>
      <div
        className={classesOpen ? styles.backdrop : styles["modal-closed"]}
      ></div>
      <div className={classesOpen ? styles.modal : styles["modal-closed"]}>
        {props.error || props.warning ? (
          <h1 className={styles["modal__title__error"]}>Warning</h1>
        ) : (
          <h1 className={styles["modal__title__success"]}>Success</h1>
        )}
        <div className={styles["modal__message"]}>{props.message}</div>
        <div className={styles["modal_buttons"]}>
          {props.warning && !props.error && (
            <button
              className={styles["modal__button--cancel"]}
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>
          )}
          <button
            className={styles["modal__button"]}
            type="button"
            onClick={acceptAction}
          >
            OK
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
