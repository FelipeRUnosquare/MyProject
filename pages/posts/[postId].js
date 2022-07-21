import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner";
import PostList from "../../components/Posts/PostList";
import DataContext from "../../store/data-context";
import EditPost from "../../components/Posts/EditPost";

const UserId = () => {
  const router = useRouter();
  const idPost = router.query.postId;
  const dataCtx = useContext(DataContext);
  const [userPostData, setUserPostData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        dataCtx.onLoading(true);
        const postData = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${idPost}`
        ).then((response) => response.json());
        console.log(postData)
        setUserPostData(postData);
        dataCtx.onLoading(false);
      } catch (error) {
        dataCtx.onError(error.message);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idPost]);

  let content = <Spinner />;

  if (userPostData.hasOwnProperty('title')) {
    content = <EditPost id={userPostData.id} title={userPostData.title} body={userPostData.body}/>
  } else {
    content = <div>No data</div>;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default UserId;
