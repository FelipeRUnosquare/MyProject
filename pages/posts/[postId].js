import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner";
import DataContext from "../../store/data-context";
import EditPost from "../../components/Posts/EditPost";

const UserId = () => {
  const dataCtx = useContext(DataContext);
  const [userPostData, setUserPostData] = useState({});
  useEffect(() => {
    setUserPostData(dataCtx.singlePostData);
  }, [dataCtx.singlePostData]);

  let content = <Spinner />;

  if (userPostData.hasOwnProperty("title")) {
    content = (
      <EditPost
        id={userPostData.id}
        title={userPostData.title}
        body={userPostData.body}
      />
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default UserId;
