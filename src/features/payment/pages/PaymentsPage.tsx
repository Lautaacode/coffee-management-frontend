import {
    useEffect,
    useState
} from "react";

import type { Payment }
    from "../interfaces/Payment";

import type { PaymentMethod }
    from "../interfaces/PaymentMethod";

import PaymentService
    from "../services/PaymentService";



import ConfirmModal
    from "../../../shared/components/ConfirmModal";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";
import PaymentModal from "../components/PaymentModal";

export default function PaymentsPage() {

    const [
        payments,
        setPayments
    ] = useState<Payment[]>([]);

    const [
        selectedPayment,
        setSelectedPayment
    ] = useState<Payment>();

    const [
        openForm,
        setOpenForm
    ] = useState(false);

    const [
        openDelete,
        setOpenDelete
    ] = useState(false);

    useEffect(() => {

        loadPayments();

    }, []);

    async function loadPayments() {

        const response =
            await PaymentService.findAll();

        setPayments(response);

    }

    async function savePayment(
        method: PaymentMethod
    ) {

        if (!selectedPayment?.id)
            return;

        await PaymentService.completePayment(

            selectedPayment.id,

            method

        );

        setOpenForm(false);

        loadPayments();

    }

    async function deletePayment() {

        if (!selectedPayment?.id)
            return;

        await PaymentService.cancelPayment(

            selectedPayment.id

        );

        setOpenDelete(false);

        loadPayments();

    }

    function editPayment(
        payment: Payment
    ) {

        setSelectedPayment(payment);

        setOpenForm(true);

    }

    function removePayment(
        payment: Payment
    ) {

        setSelectedPayment(payment);

        setOpenDelete(true);

    }

    return (

        <div>

            <h1
                className="
                text-2xl
                mb-5
                "
            >

                Payments

            </h1>

            <DataTable<Payment>

                data={payments}

                columns={[

                    {
                        header: "ID",
                        render: p => p.id
                    },

                    {
                        header: "Amount",
                        render: p =>
                            `$${p.amount}`
                    },

                    {
                        header: "Method",
                        render: p =>
                            p.method
                    },

                    {
                        header: "Status",
                        render: p =>
                            p.status
                    },

                    {
                        header: "Actions",

                        render: p =>

                            <DropdownActions

                                onEdit={() =>
                                    editPayment(p)
                                }

                                onDelete={() =>
                                    removePayment(p)
                                }

                            />

                    }

                ]}

            />

            <PaymentModal

                isOpen={openForm}

                payment={selectedPayment}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={savePayment}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Cancel payment"

                message={
                    `Cancel payment #${selectedPayment?.id}?`
                }

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deletePayment}

            />

        </div>

    );

}