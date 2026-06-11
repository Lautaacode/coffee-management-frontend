import { useEffect, useState } from "react";
import OrdersService from "../services/OrdersService";
import OrdersTable from "../components/OrdersTable";
import type { Orders } from "../interfaces/Orders";

export default function OrdersPage() {

    const [orders, setOrders] = useState<Orders[]>([]);

    useEffect(() => { loadOrders(); }, []);

    async function loadOrders() {
        const response = await OrdersService.findAll();
        setOrders(response);
    }

    return (
        <div>
            <h1>
                Orders
            </h1>
            <OrdersTable
                orders={orders}
            />
        </div>
    );
}