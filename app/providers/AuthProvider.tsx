import React, {createContext, FC, useEffect, useMemo, useState} from "react";
import {Alert} from "react-native";
import {auth, db, login, logout, register} from "../firebase";
import {addDoc, collection} from "firebase/firestore";
import {onAuthStateChanged, User} from "firebase/auth";

interface IContext {
  user: User | null,
  isLoading: boolean,
  register: (email: string, password: string) => Promise<void>,
  login: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>,
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const {user} = await register(email, password)
      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name'
      })
    } catch (err: any) {
      Alert.alert("Something went wrong...", "Registration error!\n" + err)
    } finally {
      setIsLoading(false)
    }
  }

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password)
    } catch (err: any) {
      Alert.alert("Something went wrong...", "Login error!\n" + err)
    } finally {
      setIsLoading(false)
    }
  }

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout()
    } catch (err: any) {
      Alert.alert("Something went wrong...", "Logout error! \n" + err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => onAuthStateChanged(auth, user => {
    setUser(user || null);
    setIsLoadingInitial(false)
  }), [])

  const value = useMemo(() => ({
    user,
    isLoading,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler,
  }), [user, isLoading])

  return <AuthContext.Provider value={value}>
    {!isLoadingInitial && children}
  </AuthContext.Provider>
}