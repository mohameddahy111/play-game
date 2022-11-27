import { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userGoogle, setUserGoogle] = useState(
    localStorage.userGoogle ? localStorage.userGoogle : ''
  );
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      localStorage.setItem(
        'userGoogle',
        JSON.stringify(currentUser?.accessToken)
      );
      setUserGoogle(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logoutGoogle = () => {
  
    signOut(auth);
    localStorage.removeItem('userGoogle')
    
  };
  return (
    <AuthContext.Provider
      value={{ googleSignIn, logoutGoogle, userGoogle, setUserGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
