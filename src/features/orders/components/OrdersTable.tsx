import type { Orders } from "../interfaces/Orders";

interface Props { orders: Orders[]; }

export default function OrdersTable(
    { orders }: Props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Waiter</th>
                    <th>Table</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => (
                        <tr
                            key={order.id}
                        >
                            <td>
                                {order.id}
                            </td>
                            <td>
                                {order.status}
                            </td>
                            <td>
                                {order.waiter.name}
                            </td>
                            <td>
                                {order.tables.number}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}