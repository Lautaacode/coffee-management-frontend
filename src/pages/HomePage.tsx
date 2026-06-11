import AdminDashboard from "./admin/AdminDashboard";
import CookDashboard from "./cook/CookDashboard";
import { DashboardLayout } from "../shared/layouts/DashboardLayout2";
import WaiterDashboard from "./waiter/WaiterDashboard";


export default function HomePage() {
    const user = {
        role: "WAITER",
    };

    const renderDashboard = () => {
        switch (user.role) {
            case "ADMIN":
                return <AdminDashboard />;

            case "COOK":
                return <CookDashboard />;

            case "WAITER":
                return <WaiterDashboard />;

            default:
                return (
                    <div>
                        Unauthorized
                    </div>
                );
        }
    };

    return (
        <DashboardLayout>
            {renderDashboard()}
        </DashboardLayout>
    );
}