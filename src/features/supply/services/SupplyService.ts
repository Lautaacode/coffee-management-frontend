import api from "../../../core/api/axios";
import type { Supply } from "../interfaces/Supply";

class SupplyService {

    async findAll(): Promise<Supply[]> {
        const response = await api.get("/supplies");
        return response.data;
    }

    async findById(id: number): Promise<Supply> {
        const response = await api.get(`/supplies/${id}`);
        return response.data;
    }

    async create(supply: Supply): Promise<Supply> {
        const response = await api.post("/supplies", supply);
        return response.data;
    }

    async update(id: number, supply: Supply): Promise<Supply> {
        const response = await api.patch(`/supplies/${id}`, supply);
        return response.data;
    }

    async delete(id: number) {
        await api.delete(`/supplies/${id}`);
    }

    async addStock(id: number, quantity: number) {
        const response = await api.patch(`/supplies/${id}/add-stock?quantity=${quantity}`);
        return response.data;
    }

    async removeStock(id: number, quantity: number) {
        const response = await api.patch(`/supplies/${id}/remove-stock?quantity=${quantity}`);
        return response.data;
    }

}

export default new SupplyService();