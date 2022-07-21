import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    isError: false,
    isLoading: false,
    onLogin: () => {},
    onLogout: () => {}
});

export default AuthContext;
