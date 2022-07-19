import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal";
import Spinner from "../../components/UI/Spinner";
import PostList from "../../components/Posts/PostList";

const UserId = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPostData, setUserPostData] = useState([]);
  const idUser = router.query.userId;
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const postData = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${idUser}`
        ).then((response) => response.json());
        setUserPostData(postData);
        setIsLoading(false);
      } catch (e) {
        setOpenModal(true);
      }
    }
    fetchData();
  }, [idUser]);

  const handleError = () => {
    setOpenModal(false);
    router.push("/home");
  };

  let content = <Spinner />;

  if (userPostData.length > 0) {
    content = (
      <React.Fragment>
        <PostList userPostData={userPostData} />
      </React.Fragment>
    );
  } else {
    content = <div>No data</div>;
  }
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

export default UserId;
