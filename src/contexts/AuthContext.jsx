import { useState, createContext, useEffect, useContext } from "react";
import Loading from "@dashboard/components/Loading";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const storedUser = localStorage.getItem("user");
        console.log(storedUser);

        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setLoggedIn(true);
        }
      } catch (e) {
        handleLogout();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);

    const itemsToRemove = ["user"];

    itemsToRemove.forEach((item) => localStorage.removeItem(item));

    callback();
  };

  const handleLogout = () => {
    const itemsToRemove = ["user"];

    itemsToRemove.forEach((item) => localStorage.removeItem(item));
    setLoggedIn(false);
    setUser(null);
    setLoading(false);
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  if (loading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
