import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function LoginPage() {

    const navigate =
        useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const submit =
        async (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            try {

                const response =
                    await AuthService.login({

                        email,

                        password
                    });

                localStorage.setItem(
                    "token",
                    response.token
                );

                localStorage.setItem(
                    "name",
                    response.name
                );

                localStorage.setItem(
                    "email",
                    response.email
                );

                localStorage.setItem(
                    "roles",
                    JSON.stringify(
                        response.roles
                    )
                );

                navigate(
                    "/dashboard"
                );

            } catch (error) {

                console.error(error);
            }
        };

    return (

        <form
            onSubmit={submit}
        >

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <button
                type="submit"
            >
                Login
            </button>

        </form>
    );
}