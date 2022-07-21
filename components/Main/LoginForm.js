import React, { useRef, useState } from "react";
import styles from "./Main.module.sass";

const LoginForm = (props) => {
  const usernameRef = useRef();
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    if (username.trim() === "" || !username.includes("@")) {
      setIsInvalidInput(true);
    } else {
      props.onLogin(username);
    }
  };

  return (
    <React.Fragment>
      <h1 className={styles.title}>{"<MyProject/>"}</h1>
      <form onSubmit={handleLogin} className={styles["login-form"]}>
        {isInvalidInput && <label>Please enter a valid email</label>}
        <input
          type="text"
          placeholder="Username"
          ref={usernameRef}
          className={!isInvalidInput ? styles.input : styles["input-error"]}
          onChange={() => {
            setIsInvalidInput(false);
          }}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
