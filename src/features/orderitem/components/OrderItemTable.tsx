import type { OrderItem } from "../interfaces/OrderItem";

interface Props { items: OrderItem[]; }

export default function OrderItemTable(
    { items }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <td>
                                {item.product.name}
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>
                                ${item.unitPrice}
                            </td>
                            <td>
                                ${item.subtotal}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}