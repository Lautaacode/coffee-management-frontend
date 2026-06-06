import OrdersCard from "./components/OrdersCard";
import SalesCard from "./components/SalesCard";
import StaffCard from "./components/StaffCard";
import TablesCard from "./components/TablesCard";


export default function AdminDashboard() {
    return (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="space-y-6 xl:col-span-2">
                <SalesCard />

                <TablesCard />
            </div>

            <div className="space-y-6">
                <StaffCard />

                <OrdersCard />
            </div>
        </div>
    );
}