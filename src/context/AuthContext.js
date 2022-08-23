import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialData = {
        email: 'adarshbalika@gmail.com',
        password: 'adarshBalika123'
    }
    let from = location.state?.from?.pathName || '/homePage';
    const [loginInfo, setLoginInfo] = useState(initialData);
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const loginHandler = async(e, email, password) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/auth/login", {
                email: email,
                password: password
            });
            localStorage.setItem("token", response.data.encodedToken);
            setUserLoggedIn(true);
            navigate(from, {replace: true});
        } catch (e) {
            console.log(e);
        }
    }

    return ( 
        <AuthContext.Provider
            value={{ loginHandler, loginInfo, setLoginInfo, isUserLoggedIn}}
        >
            { children }
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };