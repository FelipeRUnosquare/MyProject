import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import DataContext from "./data-context";

const DataContextProvider = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [warning, setWarning] = useState(false);

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
      } else {
        setModalMessage("Post edited successfully");
      }
      router.push("/home");
    } catch (error) {
      router.push("/home");
      setIsError(true);
      setModalMessage(error.message);
    }
  };
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

  const handleAcceptAction = async () => {
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
        isLoading: isLoading,
        onError: handleError,
        onLoading: (loading) => setIsLoading(loading),
      }}
    >
      {props.children}
      {modalMessage !== "" && (
        <Modal
          error={isError}
          message={modalMessage}
          onCloseModal={handleCloseModal}
          onAcceptAction={handleAcceptAction}
          warning={warning}
        />
      )}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
