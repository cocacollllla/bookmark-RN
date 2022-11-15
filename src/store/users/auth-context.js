import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: (user) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  // 이 컴포넌트는 인증 관련 상태를 관리하는 역할.
  const [user, setUser] = useState(null);

  const userIsLoggedIn = !!user; // null이 아니면 true를, null이면 false를 반환

  const loginHandler = (user) => {
    setUser(user);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
