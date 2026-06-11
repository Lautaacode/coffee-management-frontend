import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
    allowedRoles: string[];
    children: ReactNode;
}

export default function RoleRoute(
    {
        allowedRoles,
        children
    }: Props
) {

    const roles = JSON.parse(localStorage.getItem("roles") || "[]");

    const authorized = allowedRoles.some(role => roles.includes(role));

    if (!authorized) {
        return (
            <Navigate
                to="/dashboard"
            />
        );
    }

    return children;
}