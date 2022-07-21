import React, { useContext } from "react";
import Spinner from "../../components/UI/Spinner";
import PostList from "../../components/Posts/PostList";
import DataContext from "../../store/data-context";

const UserId = () => {
  const dataCtx = useContext(DataContext);

  let content = <Spinner />;

  if (dataCtx.postData.length > 0) {
    content = <PostList userPostData={dataCtx.postData} />;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default UserId;
