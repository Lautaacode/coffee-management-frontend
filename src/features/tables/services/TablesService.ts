import api from "../../../core/api/axios";
import type { Tables } from "../interfaces/Tables";

class TablesService {

    async findAll(): Promise<Tables[]> {
        const response = await api.get("/tables");
        return response.data;
    }

    async findById(id: number): Promise<Tables> {
        const response = await api.get(`/tables/${id}`);
        return response.data;
    }

    async create(table: Tables): Promise<Tables> {
        const response = await api.post("/tables", table);
        return response.data;
    }

    async update(id: number, table: Tables): Promise<Tables> {
        const response = await api.patch(`/tables/${id}`, table);
        return response.data;
    }

    async delete(id: number) {
        await api.delete(`/tables/${id}`);
    }

    async openTable(id: number) {
        const response = await api.patch(`/tables/${id}/open`);
        return response.data;
    }

    async closeTable(id: number) {
        const response = await api.patch(`/tables/${id}/close`);
        return response.data;
    }

    async calculateTotal(id: number): Promise<number> {
        const response = await api.get(`/tables/${id}/total`);
        return response.data;
    }

}

export default new TablesService();