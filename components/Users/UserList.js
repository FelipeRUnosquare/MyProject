import UserItem from "../Users/UserItem";
import styles from "./users.module.sass";

const UserList = (props) => {
  return (
    <div className={styles["list-container"]}>
      <h2 className={styles.title}>
        Select an user to discover their incredible posts
      </h2>
      <ul className={styles["user-list"]}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
