import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            const response = await AuthService.login({
                email,
                password
            });

            login(response);

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