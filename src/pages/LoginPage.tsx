import React, { useState } from "react";
import {
    EnvelopeIcon,
    LockClosedIcon,
    EyeIcon,
    EyeSlashIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center p-4"
            style={{ backgroundImage: "url('/bg-login.webp')" }}
        >

            {/* LOGO */}
            <div className="flex justify-center mb-6 ">
                <img
                    src="/logo.webp"
                    alt="Buen Sabor"
                    className="w-150 h-auto"
                />
            </div>
            {/* Card */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8">


                <form className="space-y-4">

                    {/* Email */}
                    <div className="relative">
                        <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />

                        {showPassword ? (
                            <EyeSlashIcon
                                onClick={() => setShowPassword(false)}
                                className="w-5 h-5 text-gray-400 absolute right-3 top-2.5 cursor-pointer"
                            />
                        ) : (
                            <EyeIcon
                                onClick={() => setShowPassword(true)}
                                className="w-5 h-5 text-gray-400 absolute right-3 top-2.5 cursor-pointer"
                            />
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-amber-800 to-amber-600 hover:opacity-90 text-white font-semibold py-2 rounded-md transition"
                    >
                        Ingresar al Servidor
                    </button>

                    {/* Forgot */}
                    <div className="text-center text-sm text-gray-600">
                        <a href="#" className="hover:underline">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};
