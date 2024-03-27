import {UserProfile} from "../Models/User";
import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginAPI, registerAPI} from "../Services/AuthService";
import {toast} from "react-toastify";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    loginUser: (username: string, password: string) => void;
    registerUser: (email: string, username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
              axios.defaults.headers.common["Authorization"] = token;
        }
        setIsReady(true);
    }, []);

    const loginUser = async (
        username: string,
        password: string
    ) => {
        await loginAPI(username, password)
            .then((res) => {
                if (res) {
                    localStorage.setItem("token", res?.data.token)
                    const userObj: UserProfile = {
                        username: res?.data.username,
                        email: res?.data.email
                    }
                    localStorage.setItem("user", JSON.stringify(userObj));
                    setToken(res?.data.username)
                    setUser(userObj!)
                    navigate("/");
                }
            }).catch((e) => toast.error("Ошибка сервера "));
    }


    const registerUser = async (
        email: string,
        username: string,
        password: string
    ) => {
        await registerAPI(email, username, password)
            .then((res) => {
                if (res) {
                    localStorage.setItem("token", res?.data.username)
                    const userObj: UserProfile = {
                        username: res?.data.username,
                        email: res?.data.email
                    }
                    localStorage.setItem("user", JSON.stringify(userObj));
                    setToken(res?.data.username)
                    setUser(userObj!)
                    navigate("/");
                }
            }).catch((e) => toast.error("Ошибка сервера"));
    }

    const isLoggedIn = () => {
        return !!user;
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null);
        setToken(null);
        navigate("/login")
    }

    return (
        <UserContext.Provider value={{user, token, loginUser, registerUser, logout, isLoggedIn}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext);