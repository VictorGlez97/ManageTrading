import React, { useState, createContext, useContext } from "react"
import api from '../services/api'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const data = { username, password }
            const response = await api.post('user/login', data)

            console.log( response );

            if ( !response.data.error ) {
                console.log( `Agregando... ${response.data.token}` );
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.user.token}`;
                sessionStorage.setItem('user', response.data.user.token);
                setUser(response.data.user.token);
            }

            return !response.data.error;
        } catch (error) {
            console.log( error );
            return false
        }
    }

    const logout = () => {
        api.defaults.headers.common['Authorization'] = null;
        sessionStorage.removeItem('user');
        setUser(null);
    }

    // const searchUser = () => {
    //     const userLocal = sessionStorage.getItem('user');
    //     if ( userLocal !== null && userLocal !== undefined ) {
    //         console.log( userLocal );
    //         api.defaults.headers.common['Authorization'] = `Bearer ${userLocal}`;
    //         setUser(userLocal);
    //     }
    // }

    return (
        <AuthContext.Provider value={{ user, login, logout/*, searchUser*/ }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}