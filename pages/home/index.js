import React, { useContext, useEffect, useState } from "react";
import UserList from "../../components/Users/UserList";
import Spinner from "../../components/UI/Spinner";
import DataContext from "../../store/data-context";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const dataCtx = useContext(DataContext);

  useEffect(() => {
    async function fetchData() {
      try {
        dataCtx.onLoading(true);
        const usersData = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
        dataCtx.onLoading(false);
        setUserList(usersData);
        dataCtx.onLoading(false);
      } catch (error) {
        dataCtx.onError(error.message);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = <UserList users={userList} />;

  if (dataCtx.isLoading) content = <Spinner />;

  return <React.Fragment>{content}</React.Fragment>;
};

export default Home;
