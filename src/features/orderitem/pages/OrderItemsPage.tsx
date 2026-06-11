import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderItemService from "../services/OrderItemService";
import OrderItemTable from "../components/OrderItemTable";
import type { OrderItem } from "../interfaces/OrderItem";

export default function OrderDetailsPage() {

    const { id } = useParams();

    const [items, setItems] = useState<OrderItem[]>([]);

    useEffect(() => { loadItems(); }, []);

    async function loadItems() {
        if (!id)
            return;
        const response = await OrderItemService.findByOrder(Number(id));
        setItems(response);
    }
    return (
        <div>
            <h1>
                Order {id}
            </h1>
            <OrderItemTable
                items={items}
            />
        </div>
    );
}