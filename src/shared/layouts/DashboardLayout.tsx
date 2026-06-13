import {
    Outlet,
    useNavigate
} from "react-router-dom";

import useAuth
    from "../../features/auth/hooks/useAuth";
import SidebarItem from "../components/SidebarItem";

export default function DashboardLayout() {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const roles = user?.roles || [];
    return (
        <div
            className="
            flex
            min-h-screen
            "
        >
            <aside
                className="
                w-64
                border-r
                p-5
                bg-white
                "
            >
                <h2
                    className="
                    text-2xl
                    font-bold
                    mb-2
                    "
                >
                    Coffee Management
                </h2>
                <p
                    className="
                    mb-5
                    text-gray-600
                    "
                >
                    {user?.name}
                </p>
                <nav>
                    <ul
                        className="
                        flex
                        flex-col
                        gap-3
                        "
                    >
                        <SidebarItem
                            to="/dashboard"
                            text="Dashboard"
                        />
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")) && (
                                <SidebarItem
                                    to="/users"
                                    text="Users"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")) && (
                                <SidebarItem
                                    to="/products"
                                    text="Products"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")) && (
                                <SidebarItem
                                    to="/supplies"
                                    text="Supplies"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")) && (
                                <SidebarItem
                                    to="/product-supplies"
                                    text="Product Supplies"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("CASHIER")) && (
                                <SidebarItem
                                    to="/payments"
                                    text="Payments"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")
                            ||
                            roles.includes("WAITER")) && (
                                <SidebarItem
                                    to="/tables"
                                    text="Tables"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")
                            ||
                            roles.includes("WAITER")) && (
                                <SidebarItem
                                    to="/orders"
                                    text="Orders"
                                />
                            )}
                        {(roles.includes("SUPER_ADMIN")
                            ||
                            roles.includes("MANAGER")
                            ||
                            roles.includes("COOK")) && (
                                <SidebarItem
                                    to="/kitchen"
                                    text="Kitchen"
                                />
                            )}
                    </ul>
                </nav>
                <button
                    className="
                    mt-8
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded
                    "
                    onClick={() => {
                        logout();
                        navigate("/login");
                    }}
                >
                    Logout
                </button>
            </aside>
            <main
                className="
                flex-1
                p-8
                "
            >
                <Outlet />
            </main>
        </div>
    );
}