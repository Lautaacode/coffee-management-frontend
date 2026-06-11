import { useEffect, useState } from "react";
import PaymentService from "../services/PaymentService";
import PaymentTable from "../components/PaymentTable";
import type { Payment } from "../interfaces/Payment";

export default function PaymentsPage() {

    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => { loadPayments(); }, []);

    async function loadPayments() {
        const response = await PaymentService.findAll();
        setPayments(response);
    }
    return (
        <div>
            <h1>
                Payments
            </h1>
            <PaymentTable
                payments={payments}
            />
        </div>
    );
}