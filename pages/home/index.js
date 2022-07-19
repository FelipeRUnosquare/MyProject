import React, { useContext, useEffect, useState } from "react";
import Modal from "../../components/UI/Modal";
import AuthContext from "../../store/auth-context";
import UserList from "../../components/Users/UserList";
import Spinner from "../../components/UI/Spinner";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userList, setUserList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const ctx = useContext(AuthContext);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const usersData = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
        setUserList(usersData);
        setIsLoading(false)
      } catch (e) {
        setOpenModal(true);
      }
    }
    fetchData();
  }, []);

  const handleError = () => {
    setOpenModal(false);
    ctx.onLogout();
  };

  let content = <UserList users={userList} />

  if (isLoading) content = <Spinner/>

  return (
    <React.Fragment>
      {content}

      {openModal && (
        <Modal
          error={true}
          message={"An unexpected error has ocurred, please try again later"}
          onAccept={handleError}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
