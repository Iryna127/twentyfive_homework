import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = React.createContext({
  doLogin: () => {},
  doLogout: () => {},
  token: undefined,
});
const AuthProvider = (props) => {
  const [token, setToken] = useState();

  useEffect(() => {
    console.log('login', localStorage.getItem('token'));
    setToken(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
    }
  }, [token]);

  const doLogin = async (user) => {
    try {
      const token = await axios.post('login', { user });
      console.log(token);
      localStorage.setItem('token', token.data.token);
      setToken(token.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const getContextValue = () => {
    return {
      doLogin,
      token,
    };
  };
  return (
    <AuthContext.Provider value={getContextValue()}>
      {token ? props.children[1] : props.children[0]}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
