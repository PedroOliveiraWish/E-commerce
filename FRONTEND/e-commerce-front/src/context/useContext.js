import { useState, useEffect ,createContext } from "react";

const userContext = createContext();

function UserSave({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userLogin) => {
    localStorage.setItem('user', JSON.stringify(userLogin));
    setUser(userLogin); 
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false)
  }, []);

  const logout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </userContext.Provider>
  );
}

export { UserSave, userContext };
