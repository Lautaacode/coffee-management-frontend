import { useEffect, useState } from "react";

import Modal from "../../../shared/components/Modal";

import type { OrderItem }
    from "../interfaces/OrderItem";

interface Props {

    isOpen: boolean;

    item?: OrderItem;

    onClose: () => void;

    onSave: (
        productId: number,
        quantity: number
    ) => void | Promise<void>;

}

export default function OrderItemModal({

    isOpen,
    item,
    onClose,
    onSave

}: Props) {

    const [
        productId,
        setProductId
    ] = useState(0);

    const [
        quantity,
        setQuantity
    ] = useState(1);

    useEffect(() => {

        if (item) {

            setProductId(
                item.product.id
            );

            setQuantity(
                item.quantity
            );

        } else {

            setProductId(0);

            setQuantity(1);

        }

    }, [item]);

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        await onSave(
            productId,
            quantity
        );

    }

    return (

        <Modal
            isOpen={isOpen}
            title={
                item
                    ? "Edit Item"
                    : "Add Item"
            }
            onClose={onClose}
        >

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <h2 className="text-xl">

                    {
                        item
                            ? "Edit Item"
                            : "Add Item"
                    }

                </h2>

                <div>

                    <label>

                        Product ID

                    </label>

                    <input

                        type="number"

                        value={productId}

                        onChange={e =>
                            setProductId(
                                Number(
                                    e.target.value
                                )
                            )
                        }

                        className="
                            border
                            w-full
                            p-2
                            rounded
                        "

                    />

                </div>

                <div>

                    <label>

                        Quantity

                    </label>

                    <input

                        type="number"

                        value={quantity}

                        onChange={e =>
                            setQuantity(
                                Number(
                                    e.target.value
                                )
                            )
                        }

                        className="
                            border
                            w-full
                            p-2
                            rounded
                        "

                    />

                </div>

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

            </form>

        </Modal>

    );

}