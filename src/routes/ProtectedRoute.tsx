import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute({
    children,
}: Props) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}