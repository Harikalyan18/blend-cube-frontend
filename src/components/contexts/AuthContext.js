import { useContext, createContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const handleLogin = () => {
        setUser(user)
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout}}>
            { children }
        </AuthContext.Provider>
    )
}