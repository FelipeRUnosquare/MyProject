import React, { useContext, useRef, useState } from "react";
import Modal from "../components/UI/Modal";
import Spinner from "../components/UI/Spinner";
import AuthContext from "../store/auth-context";
import styles from "../styles/login.module.sass";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(AuthContext);
  const usernameRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const username = usernameRef.current.value;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userAccepted = await response.json();
    console.log(userAccepted.email);
    if (userAccepted.email === username) {
      ctx.onLogin();
    } else {
      setOpenModal(true);
    }
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    usernameRef.current.value = "";
  };

  let content = (
      <React.Fragment>
      <h1 className={styles.title}>{'<MyProject/>'}</h1>
      <form onSubmit={handleLogin} className={styles["login-form"]}>
        <input
          type="text"
          placeholder="Username"
          ref={usernameRef}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      </React.Fragment>
  );

  if (isLoading) {
    content = <Spinner />;
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles["form-container"]}>
        {content}
        </div>
      </div>
      {openModal && (
        <Modal
          error={true}
          message={"Not Authorized, please contact the Administrator"}
          onAccept={handleCloseModal}
        />
      )}
    </React.Fragment>
  );
}
