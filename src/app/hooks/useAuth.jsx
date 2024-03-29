import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import userService from '../services/user.service';
import { toast } from 'react-toastify';
import { setTokens } from '../services/localStorage.service';

const httpAuth = axios.create();
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};
// const TOKEN_KEY = 'jwt-token';
// const REFRESH_KEY = 'jwt-refresh-token';
// const ECPIRES_KEY = 'jwt-expires';

const AuthProvider = ({ children }) => {
    const [currentUser, setUser] = useState({});
    const [error, setError] = useState(null);

    // function setTokens({ refreshToken, idToken, expiresIn = 3600 }) {
    //     const expiresDate = new Date().getTime() + expiresIn * 1000;
    //     localStorage.setItem(TOKEN_KEY, idToken);
    //     localStorage.setItem(REFRESH_KEY, refreshToken);
    //     localStorage.setItem(ECPIRES_KEY, expiresDate);
    // }
    async function signUp({ email, password, ...rest }) {
        // const keyFireBasePrivate = 'AIzaSyA_sPbk8ykfDBPGDEs5X9miXALTrHpbvFg';
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`;

        try {
            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            });
            console.log(data);
            setTokens(data);
            await createUser({ _id: data.localId, email, ...rest });
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function createUser(data) {
        try {
            const { content } = userService.create(data);
            setUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <AuthContext.Provider value={{ signUp, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AuthProvider;
