import React, { useContext, useRef, useState } from "react";
import LoginForm from "../components/Main/LoginForm";
import Spinner from "../components/UI/Spinner";
import AuthContext from "../store/auth-context";
import DataContext from "../store/data-context";
import styles from "../styles/index.module.sass";

export default function Login() {
  const authCtx = useContext(AuthContext);
  const dataCtx = useContext(DataContext);

  const handleLogin = async (username) => {
    dataCtx.onLoading(true)
    const fetchLogin = await authCtx.onLogin(username);
    if (fetchLogin) {
      dataCtx.onError(fetchLogin.message)
    }
  };

  let content = <LoginForm onLogin={handleLogin} />;

  if (dataCtx.isLoading) {
    content = <Spinner />;
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles["form-container"]}>{content}</div>
      </div>
    </React.Fragment>
  );
}
