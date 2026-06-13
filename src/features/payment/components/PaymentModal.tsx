import { useEffect, useState } from "react";

import Modal from "../../../shared/components/Modal";

import type { Payment } from "../interfaces/Payment";
import type { PaymentMethod } from "../interfaces/PaymentMethod";

interface Props {
    isOpen: boolean;
    payment?: Payment;
    onClose: () => void;
    onSave: (method: PaymentMethod) => void;
}

export default function PaymentModal({
    isOpen,
    payment,
    onClose,
    onSave
}: Props) {

    const [method, setMethod] =
        useState<PaymentMethod>("CASH");

    useEffect(() => {

        if (payment?.method) {

            setMethod(payment.method);

        }

    }, [payment]);

    return (

        <Modal
            isOpen={isOpen}
            title="Complete Payment"
            onClose={onClose}
        >

            <div className="space-y-4">

                <select

                    value={method}

                    onChange={(e) =>
                        setMethod(
                            e.target.value as PaymentMethod
                        )
                    }

                    className="
                    border
                    w-full
                    p-2
                    rounded
                    "
                >

                    <option value="CASH">
                        CASH
                    </option>

                    <option value="CARD">
                        CARD
                    </option>

                    <option value="TRANSFER">
                        TRANSFER
                    </option>

                </select>

                <button

                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded
                    "

                    onClick={() =>
                        onSave(method)
                    }

                >

                    Save

                </button>

            </div>

        </Modal>

    );

}