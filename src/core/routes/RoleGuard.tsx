import { Navigate } from "react-router-dom";
import useAuth from "../../features/auth/hooks/useAuth";

interface Props {

    roles: string[];

    children: React.ReactNode;

}

export default function RoleGuard({
    roles,
    children
}: Props) {

    const { user } = useAuth();

    if (!user) {

        return (
            <Navigate to="/login" />
        );

    }

    const authorized =
        user.roles.some(
            role =>
                roles.includes(role)
        );

    if (!authorized) {

        return (
            <Navigate to="/dashboard" />
        );

    }

    return children;

}