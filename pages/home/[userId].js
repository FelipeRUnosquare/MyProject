import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner";
import PostList from "../../components/Posts/PostList";
import DataContext from "../../store/data-context";

const UserId = () => {
  const router = useRouter();
  const idUser = router.query.userId;
  const dataCtx = useContext(DataContext);
  const [userPostData, setUserPostData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        dataCtx.onLoading(true);
        const postData = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${idUser}`
        ).then((response) => response.json());
        setUserPostData(postData);
        dataCtx.onLoading(false);
      } catch (error) {
        dataCtx.onError(error.message);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUser]);

  let content = <Spinner />;

  if (userPostData.length > 0) {
    content = <PostList userPostData={userPostData} />
  } else {
    content = <div>No data</div>;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default UserId;
