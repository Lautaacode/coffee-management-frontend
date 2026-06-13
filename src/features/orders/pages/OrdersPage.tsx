import {
    useEffect,
    useState
} from "react";

import type { Orders }
    from "../interfaces/Orders";

import OrdersService
    from "../services/OrdersService";

import OrdersModal
    from "../components/OrdersModal";

import ConfirmModal
    from "../../../shared/components/ConfirmModal";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";

export default function OrdersPage() {

    const [
        orders,
        setOrders
    ] = useState<Orders[]>([]);

    const [
        selectedOrder,
        setSelectedOrder
    ] = useState<Orders>();

    const [
        openForm,
        setOpenForm
    ] = useState(false);

    const [
        openDelete,
        setOpenDelete
    ] = useState(false);

    useEffect(() => {

        loadOrders();

    }, []);

    async function loadOrders() {

        const response =
            await OrdersService.findAll();

        setOrders(response);

    }

    async function saveOrder(
        tableId: number,
        waiterId: number
    ) {

        await OrdersService.create(
            tableId,
            waiterId
        );

        setOpenForm(false);

        loadOrders();

    }

    async function deleteOrder() {

        /*
        Tu backend no tiene DELETE.
        Aquí podrías usar close()
        */

        if (!selectedOrder?.id)
            return;

        await OrdersService.close(
            selectedOrder.id
        );

        setOpenDelete(false);

        loadOrders();

    }

    function editOrder(
        order: Orders
    ) {

        setSelectedOrder(order);

        setOpenForm(true);

    }

    function removeOrder(
        order: Orders
    ) {

        setSelectedOrder(order);

        setOpenDelete(true);

    }

    return (

        <div>

            <div
                className="
                flex
                justify-between
                mb-5
                "
            >

                <h1
                    className="text-2xl"
                >

                    Orders

                </h1>

                <button

                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded
                    "

                    onClick={() => {

                        setSelectedOrder(
                            undefined
                        );

                        setOpenForm(true);

                    }}

                >

                    New Order

                </button>

            </div>

            <DataTable<Orders>

                data={orders}

                columns={[

                    {
                        header: "ID",

                        render: o =>
                            o.id
                    },

                    {
                        header: "Status",

                        render: o =>
                            o.status
                    },

                    {
                        header: "Table",

                        render: o =>
                            o.tables?.number
                    },

                    {
                        header: "Waiter",

                        render: o =>
                            o.waiter?.name
                    },

                    {
                        header: "Actions",

                        render: o =>

                            <DropdownActions

                                onEdit={() =>
                                    editOrder(o)
                                }

                                onDelete={() =>
                                    removeOrder(o)
                                }

                            />

                    }

                ]}

            />

            <OrdersModal

                isOpen={openForm}

                order={selectedOrder}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={saveOrder}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Close order"

                message={
                    `Close order #${selectedOrder?.id}?`
                }

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deleteOrder}

            />

        </div>

    );

}