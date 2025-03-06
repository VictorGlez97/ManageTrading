import React, { useState, createContext, useContext } from "react"
import api from '../services/api'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const data = { username, password }
            const response = await api.post('user/login', data)

            if ( !response.data.error ) {
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                setUser(response.data.user);
            }

            return !response.data.error;
        } catch (error) {
            return false;
        }
    }

    const logout = () => {
        sessionStorage.removeItem('user');
        setUser(null);
    }

    const searchUser = () => {
        const userLocal = sessionStorage.getItem('user');
        if ( userLocal !== null && userLocal !== undefined ) {
            console.log( userLocal );
            setUser(JSON.parse(userLocal));
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, searchUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}