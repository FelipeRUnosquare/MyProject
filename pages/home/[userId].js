import React, { useContext, useEffect } from "react";
import Spinner from "../../components/UI/Spinner";
import PostList from "../../components/Posts/PostList";
import DataContext from "../../store/data-context";
import { useRouter } from "next/router";


const UserId = () => {
  const dataCtx = useContext(DataContext);
  // The following lines are added in case backend is synchronized and data were updated if put and delete requests are sent
  const router = useRouter();
  const idUser = router.query.userId;
  useEffect(() => {
      dataCtx.onGetPostData(idUser)
  }, []);
  // 

  let content = <Spinner />;

  if (dataCtx.postData.length > 0) {
    content = <PostList userPostData={dataCtx.postData} />;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default UserId;
