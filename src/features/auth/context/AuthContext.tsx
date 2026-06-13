import {
    createContext,
    useState,
    type ReactNode
} from "react";
import type { AuthUser } from "../interfaces/AuthUser";



interface AuthContextType {

    user: AuthUser | null;

    login: (
        user: AuthUser
    ) => void;

    logout: () => void;

}

export const AuthContext =
    createContext<AuthContextType>(
        {} as AuthContextType
    );

interface Props {

    children: ReactNode;

}

export default function AuthProvider({
    children
}: Props) {

    const [user, setUser] =
        useState<AuthUser | null>(

            JSON.parse(
                localStorage.getItem(
                    "user"
                ) || "null"
            )

        );

    function login(
        user: AuthUser
    ) {

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        setUser(user);

    }

    function logout() {

        localStorage.removeItem(
            "user"
        );

        setUser(null);

    }

    return (

        <AuthContext.Provider

            value={{

                user,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}