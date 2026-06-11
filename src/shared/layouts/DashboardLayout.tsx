import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {

    const name = localStorage.getItem("name");
    const roles = JSON.parse(localStorage.getItem("roles") || "[]");

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside
                style={{
                    width: "250px",
                    padding: "1rem",
                    borderRight:
                        "1px solid #ddd"
                }}
            >
                <h2>Coffee Management</h2>
                <p>{name}</p>
                <hr />
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                        {
                            (
                                roles.includes(
                                    "SUPER_ADMIN"
                                )
                                ||
                                roles.includes(
                                    "MANAGER"
                                )
                            ) && (
                                <li>
                                    <Link
                                        to="/users"
                                    >
                                        Users
                                    </Link>
                                </li>
                            )
                        }
                        {
                            (
                                roles.includes(
                                    "SUPER_ADMIN"
                                ) ||
                                roles.includes(
                                    "MANAGER"
                                )
                            ) && (
                                <li>
                                    <Link
                                        to="/products"
                                    >
                                        Products
                                    </Link>
                                </li>
                            )
                        }
                        {
                            (
                                roles.includes(
                                    "SUPER_ADMIN"
                                )
                                ||
                                roles.includes(
                                    "MANAGER"
                                )
                            ) && (
                                <li>
                                    <Link
                                        to="/supplies"
                                    >
                                        Supplies
                                    </Link>
                                </li>
                            )
                        }

                        {
                            (
                                roles.includes(
                                    "SUPER_ADMIN"
                                )
                                ||
                                roles.includes(
                                    "MANAGER"
                                )
                            ) && (
                                <li>
                                    <Link
                                        to="/product-supplies"
                                    >
                                        Product Supplies
                                    </Link>
                                </li>
                            )
                        }
                        {
                            (
                                roles.includes(
                                    "SUPER_ADMIN"
                                ) ||
                                roles.includes(
                                    "CASHIER"
                                )
                            ) && (
                                <li>
                                    <Link
                                        to="/payments"
                                    >
                                        Payments
                                    </Link>
                                </li>
                            )
                        }
                        {
                            (
                                roles.includes("SUPER_ADMIN")
                                ||
                                roles.includes("MANAGER")
                                ||
                                roles.includes("WAITER")
                            ) && (
                                <li>
                                    <Link
                                        to="/tables"
                                    >
                                        Tables
                                    </Link>
                                </li>
                            )
                        }
                        {
                            (
                                roles.includes(
                                    "SUPER_ADMIN"
                                ) ||
                                roles.includes(
                                    "MANAGER"
                                ) ||
                                roles.includes(
                                    "WAITER"
                                )
                            ) && (
                                <li>
                                    <Link
                                        to="/orders"
                                    >
                                        Orders
                                    </Link>
                                </li>
                            )
                        }
                        {
                            (
                                roles.includes("SUPER_ADMIN")
                                ||
                                roles.includes("MANAGER")
                                ||
                                roles.includes("COOK")
                            )
                            &&
                            (
                                <li>
                                    <Link
                                        to="/kitchen"
                                    >
                                        Kitchen
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </aside>
            <main
                style={{
                    flex: 1,
                    padding: "2rem"
                }}
            >
                <Outlet />
            </main>
        </div>
    );
}