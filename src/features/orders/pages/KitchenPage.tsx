import { useEffect, useState } from "react";
import OrdersService from "../services/OrdersService";
import type { Orders } from "../interfaces/Orders";

export default function KitchenPage() {

    const [orders, setOrders] = useState<Orders[]>([]);

    useEffect(() => { loadOrders(); }, []);

    async function loadOrders() {
        const response = await OrdersService.findAll();
        setOrders(
            response.filter(
                order =>
                    order.status === "CREATED" ||
                    order.status === "IN_PROGRESS"
            )
        );
    }

    async function startPreparation(id: number) {
        await OrdersService.startPreparation(id);
        loadOrders();
    }

    async function ready(id: number) {
        await OrdersService.ready(id);
        loadOrders();
    }

    return (
        <div>
            <h1>
                Kitchen
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Order
                        </th>
                        <th>
                            Table
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(
                            order => (
                                <tr
                                    key={order.id}
                                >
                                    <td>
                                        {order.id}
                                    </td>
                                    <td>
                                        {order.tables.number}
                                    </td>
                                    <td>
                                        {order.status}
                                    </td>
                                    <td>
                                        {
                                            order.status === "CREATED"
                                            &&
                                            <button
                                                onClick={() =>
                                                    startPreparation(
                                                        order.id
                                                    )
                                                }
                                            >
                                                Start
                                            </button>
                                        }
                                        {
                                            order.status === "IN_PROGRESS"
                                            &&
                                            <button
                                                onClick={() =>
                                                    ready(
                                                        order.id
                                                    )
                                                }
                                            >
                                                Ready
                                            </button>
                                        }
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}