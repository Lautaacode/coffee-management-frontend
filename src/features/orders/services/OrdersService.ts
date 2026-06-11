import api from "../../../core/api/axios";
import type {Orders} from "../interfaces/Orders";

class OrdersService {

    async findAll(): Promise<Orders[]> {
        const response =await api.get("/orders");
            return response.data;
    }

    async findById(id: number): Promise<Orders> {
        const response =await api.get(`/orders/${id}`);
        return response.data;
    }

    async create(tableId: number,waiterId: number): Promise<Orders> {
        const response =await api.post(`/orders?tableId=${tableId}&waiterId=${waiterId}`);
        return response.data;
    }

    async startPreparation(id: number): Promise<Orders> {
        const response =await api.patch(`/orders/${id}/start`);
        return response.data;
    }

    async ready(id: number): Promise<Orders> {
        const response =await api.patch(`/orders/${id}/ready`);
        return response.data;
    }

    async delivered(id: number): Promise<Orders> {
        const response =await api.patch(`/orders/${id}/delivered`);
        return response.data;
    }

    async close(id: number): Promise<Orders> {
        const response =await api.patch(`/orders/${id}/close`);
        return response.data;
    }

}

export default new OrdersService();