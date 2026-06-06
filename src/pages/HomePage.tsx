import AdminDashboard from "../features/admin/AdminDashboard";
import CookDashboard from "../features/cook/CookDashboard";
import WaiterDashboard from "../features/waiter/WaiterDashboard";
import DashboardLayout from "../layouts/DashboardLayout";


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