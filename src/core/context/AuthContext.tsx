import { createContext, useState } from "react";

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (
        token: string
    ) => void;

    logout: () => void;
}

export const AuthContext =
    createContext<AuthContextType>(
        null!
    );

export function AuthProvider(
    {
        children
    }: any
) {

    const [token, setToken] =
        useState(
            localStorage.getItem(
                "token"
            )
        );

    const login =
        (
            token: string
        ) => {

            localStorage.setItem(
                "token",
                token
            );

            setToken(token);
        };

    const logout =
        () => {

            localStorage.clear();

            setToken(null);
        };

    return (

        <AuthContext.Provider
            value={{
                token,
                isAuthenticated:
                    !!token,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>
    );
}