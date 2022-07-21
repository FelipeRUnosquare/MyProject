import React, { useContext, useEffect } from "react";
import UserList from "../../components/Users/UserList";
import Spinner from "../../components/UI/Spinner";
import DataContext from "../../store/data-context";

const Home = () => {
  const dataCtx = useContext(DataContext);
  useEffect(() => {
    dataCtx.onGetUserData();
  }, []);

  let content = <UserList users={dataCtx.userList} />;

  if (dataCtx.isLoading) content = <Spinner />;

  return <React.Fragment>{content}</React.Fragment>;
};

export default Home;
