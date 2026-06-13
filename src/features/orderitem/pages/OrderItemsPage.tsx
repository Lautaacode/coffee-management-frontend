import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { OrderItem }
    from "../interfaces/OrderItem";

import OrderItemService
    from "../services/OrderItemService";

import OrderItemModal
    from "../components/OrderItemModal";

import ConfirmModal
    from "../../../shared/components/ConfirmModal";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";

export default function OrderItemsPage() {

    const { id } = useParams();

    const orderId = Number(id);

    const [
        items,
        setItems
    ] = useState<OrderItem[]>([]);

    const [
        selectedItem,
        setSelectedItem
    ] = useState<OrderItem>();

    const [
        openForm,
        setOpenForm
    ] = useState(false);

    const [
        openDelete,
        setOpenDelete
    ] = useState(false);

    useEffect(() => {

        if (orderId) {

            loadItems();

        }

    }, [orderId]);

    async function loadItems() {

        const response =
            await OrderItemService.findByOrder(
                orderId
            );

        setItems(response);

    }

    async function saveItem(
        productId: number,
        quantity: number
    ) {

        if (selectedItem?.id) {

            await OrderItemService.updateQuantity(
                selectedItem.id,
                quantity
            );

        } else {

            await OrderItemService.addItem(
                orderId,
                productId,
                quantity
            );

        }

        setOpenForm(false);

        loadItems();

    }

    async function deleteItem() {

        if (!selectedItem?.id)
            return;

        await OrderItemService.removeItem(
            selectedItem.id
        );

        setOpenDelete(false);

        loadItems();

    }

    function editItem(
        item: OrderItem
    ) {

        setSelectedItem(item);

        setOpenForm(true);

    }

    function removeItem(
        item: OrderItem
    ) {

        setSelectedItem(item);

        setOpenDelete(true);

    }

    return (

        <div>

            <div className="flex justify-between mb-5">

                <h1 className="text-2xl">

                    Order Items

                </h1>

                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => {

                        setSelectedItem(undefined);

                        setOpenForm(true);

                    }}
                >

                    Add Item

                </button>

            </div>

            <DataTable<OrderItem>

                data={items}

                columns={[

                    {
                        header: "ID",
                        render: i => i.id
                    },

                    {
                        header: "Product",
                        render: i => i.product.name
                    },

                    {
                        header: "Quantity",
                        render: i => i.quantity
                    },

                    {
                        header: "Unit Price",
                        render: i => `$${i.unitPrice}`
                    },

                    {
                        header: "Subtotal",
                        render: i => `$${i.subtotal}`
                    },

                    {
                        header: "Actions",

                        render: i =>

                            <DropdownActions

                                onEdit={() =>
                                    editItem(i)
                                }

                                onDelete={() =>
                                    removeItem(i)
                                }

                            />

                    }

                ]}

            />

            <OrderItemModal

                isOpen={openForm}

                item={selectedItem}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={saveItem}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Delete item"

                message={`Delete ${selectedItem?.product.name}?`}

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deleteItem}

            />

        </div>

    );

}