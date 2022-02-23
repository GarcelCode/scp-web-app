import { createContext, useEffect, useState } from "react";
import {
    User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../firebase-conf";

interface AuthPropsProvider {
  children: JSX.Element;
}

export const authContext = createContext<any>({});

export function AuthProvider({ children }: AuthPropsProvider) {

  const [user, setUser] = useState<FirebaseUser|null>()
  const [loading, setLoading] = useState(true)

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => {
    signOut(auth)
  }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
    }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logOut, loading }}>
      {children}
    </authContext.Provider>
  );
}
