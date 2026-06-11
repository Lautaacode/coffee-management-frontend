import type { Payment } from "../interfaces/Payment";

interface Props { payments: Payment[]; }

export default function PaymentTable(
    { payments }: Props
) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    payments.map(
                        payment => (
                            <tr
                                key={payment.id}
                            >
                                <td>
                                    {payment.id}
                                </td>
                                <td>
                                    ${payment.amount}
                                </td>
                                <td>
                                    {payment.method}
                                </td>
                                <td>
                                    {payment.status}
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    );
}