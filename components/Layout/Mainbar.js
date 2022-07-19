import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import styles from "./Mainbar.module.css";

const Mainbar = () => {
  const router = useRouter()
  const ctx = useContext(AuthContext);
  const handleLogout = () => {
    ctx.onLogout();
  };

  const handleClickGoHome = () => {
    router.push('/home')
  }
  const buttonStyle = `material-symbols-outlined ${styles["button-logout"]}`;

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title} onClick={handleClickGoHome}>{'<MyProject/>'}</h1>
      <div className={buttonStyle} onClick={handleLogout}>
        logout
      </div>
    </nav>
  );
};

export default Mainbar;
