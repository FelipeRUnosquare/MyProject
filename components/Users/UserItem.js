import { useRouter } from "next/router";
import styles from "./users.module.sass";

const UserItem = (props) => {
  const router = useRouter();
  const user = props.user;
  const handleSelectUser = () => {
    router.push(`/home/${user.id}`);
  };
  const buttonStyle = `material-symbols-outlined ${styles["user-icon"]}`;
  return (
    <div className={styles.card} onClick={handleSelectUser}>
      <div className={styles['user-name']}>
        <h4>{user.name}</h4>
      </div>
      <div className={buttonStyle}>account_circle</div>
    </div>
  );
};

export default UserItem;
