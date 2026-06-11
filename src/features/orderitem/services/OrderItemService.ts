import api from "../../../core/api/axios";
import type { OrderItem } from "../interfaces/OrderItem";

class OrderItemService {

    async findByOrder(orderId: number): Promise<OrderItem[]> {
        const response = await api.get(`/order-items/order/${orderId}`);
        return response.data;
    }

    async addItem(orderId: number, productId: number, quantity: number): Promise<OrderItem> {
        const response = await api.post(`/order-items?orderId=${orderId}&productId=${productId}&quantity=${quantity}`);
        return response.data;
    }

    async updateQuantity(itemId: number, quantity: number): Promise<OrderItem> {
        const response = await api.patch(`/order-items/${itemId}?quantity=${quantity}`);
        return response.data;
    }

    async removeItem(itemId: number): Promise<void> {
        await api.delete(`/order-items/${itemId}`);
    }
}

export default new OrderItemService();