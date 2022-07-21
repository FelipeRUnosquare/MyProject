import React from "react";

const DataContext = React.createContext({
   onEditPost: () => {},
   onDeletePost: () => {},
   isLoading: null,
   onError: () => {},
   onLoading: () => {}
})

export default DataContext;