import { useEffect, useState } from "react";

import Modal
    from "../../../shared/components/Modal";

import type { Orders }
    from "../interfaces/Orders";

interface Props {

    isOpen: boolean;

    order?: Orders;

    onClose: () => void;

    onSave: (
        tableId: number,
        waiterId: number
    ) => void | Promise<void>;

}

export default function OrdersModal({

    isOpen,

    order,

    onClose,

    onSave

}: Props) {

    const [
        tableId,
        setTableId
    ] = useState(0);

    const [
        waiterId,
        setWaiterId
    ] = useState(0);

    useEffect(() => {

        if (order) {

            setTableId(
                order.tables?.id ?? 0
            );

            setWaiterId(
                order.waiter?.id ?? 0
            );

        } else {

            setTableId(0);

            setWaiterId(0);

        }

    }, [order]);

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        await onSave(
            tableId,
            waiterId
        );

    }

    return (

        <Modal

            isOpen={isOpen}

            title={
                order
                    ? "Edit Order"
                    : "New Order"
            }

            onClose={onClose}

        >

            <form

                onSubmit={handleSubmit}

                className="space-y-4"

            >

                <div>

                    <label
                        className="block mb-1"
                    >

                        Table ID

                    </label>

                    <input

                        type="number"

                        value={tableId}

                        onChange={e =>
                            setTableId(
                                Number(
                                    e.target.value
                                )
                            )
                        }

                        className="
                        border
                        rounded
                        p-2
                        w-full
                        "

                    />

                </div>

                <div>

                    <label
                        className="block mb-1"
                    >

                        Waiter ID

                    </label>

                    <input

                        type="number"

                        value={waiterId}

                        onChange={e =>
                            setWaiterId(
                                Number(
                                    e.target.value
                                )
                            )
                        }

                        className="
                        border
                        rounded
                        p-2
                        w-full
                        "

                    />

                </div>

                <div
                    className="
                    flex
                    justify-end
                    gap-2
                    "
                >

                    <button

                        type="button"

                        onClick={onClose}

                        className="
                        border
                        px-4
                        py-2
                        rounded
                        "

                    >

                        Cancel

                    </button>

                    <button

                        type="submit"

                        className="
                        bg-blue-600
                        text-white
                        px-4
                        py-2
                        rounded
                        "

                    >

                        Save

                    </button>

                </div>

            </form>

        </Modal>

    );

}