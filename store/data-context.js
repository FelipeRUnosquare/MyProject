import React from "react";

const DataContext = React.createContext({
   onEditPost: () => {},
   onDeletePost: () => {},
   onError: () => {},
   onLoading: () => {},
   onGetPostData: () => {},
   onGetUserData: () => {},
   onHandleEditPost: () => {},
   userList: [],
   postData: [],
   singlePostData: [],
   isLoading: null,
})

export default DataContext;