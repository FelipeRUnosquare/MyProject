import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "../components/UI/Modal";
import DataContext from "./data-context";

const DataContextProvider = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [singlePostData, setSinglePostData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [warning, setWarning] = useState(false);

  const handleWarningDeletePost = (id) => {
    setWarning(true);
    setModalMessage("Are you sure you want to delete this post?");
    setIdToDelete(id);
  };

  const handleError = (newError) => {
    setIsError(true);
    setModalMessage(newError);
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setIsError(false);
    setWarning(false);
    setModalMessage("");
  };

  const getPostData = async (idUser) => {
    try {
      setIsLoading(true);
      const postData = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${idUser}`
      ).then((response) => response.json());
      setPostData(postData);
      setIsLoading(false);
    } catch (error) {
      handleError(error.message);
    }
  };

  const getUsersData = async () => {
    try {
      setIsLoading(true)
      const usersData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      setIsLoading(false);
      setUserList(usersData);
    } catch (error) {
      handleError(error.message);
    }
  };

  const handleEditPost = async (data) => {
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${data.id}`,
        requestOptions
      );
      if (!response.ok) {
        throw Error("An error has ocurred");
      }
      setPostData(prevPostData => prevPostData.map((post) => {
        if (post.id === data.id) {
          post.title = data.title,
          post.body = data.body
        }
        return post
      }))
      setModalMessage("Post edited successfully");
      router.back();
    } catch (error) {
      router.push("/home");
      setIsError(true);
      setModalMessage(error.message);
    }
  };

  const handleDeletePost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${idToDelete}`,
        {
          method: "DELETE",
        }
      ).then((response) => response);
      if (!response.ok) {
        throw Error("An error has ocurred");
      }
      setWarning(false);
      setPostData((prevPostData) =>
          prevPostData.filter((postData) => postData.id !== idToDelete)
        );
      setModalMessage("Post deleted successfully");
    } catch (error) {
      setIsError(true);
      setModalMessage(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        onEditPost: handleEditPost,
        onWarningDeletePost: handleWarningDeletePost,
        onGetPostData: getPostData,
        onGetUserData: getUsersData,
        onError: handleError,
        onSelectPostToEdit: (post) => setSinglePostData(post),
        onLoading: (loading) => setIsLoading(loading),
        userList: userList,
        postData: postData,
        singlePostData: singlePostData,
        isLoading: isLoading,
      }}
    >
      {props.children}
      {modalMessage !== "" && (
        <Modal
          error={isError}
          message={modalMessage}
          onCloseModal={handleCloseModal}
          onAcceptAction={handleDeletePost}
          warning={warning}
        />
      )}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
