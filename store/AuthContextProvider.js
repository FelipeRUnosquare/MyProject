import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const localLoggedIn = localStorage.getItem("isLoggedIn");
    if (localLoggedIn === "true") {
      setIsLoggedIn(true);
      router.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  const loginHandler = async (username) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const userAccepted = await response.json();
      console.log(userAccepted.email);
      if (userAccepted.email === username) {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        router.push("/home");
      } else {
        throw new Error("Not Authorized, please contact the Administrator");
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
