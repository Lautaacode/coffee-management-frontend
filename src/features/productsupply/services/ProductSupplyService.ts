import api from "../../../core/api/axios";
import type { ProductSupply } from "../interfaces/ProductSupply";

class ProductSupplyService {

    async findAll(): Promise<ProductSupply[]> {
        const response = await api.get("/product-supplies");
        return response.data;
    }

    async create(productSupply: ProductSupply): Promise<ProductSupply> {
        const response = await api.post("/product-supplies", productSupply);
        return response.data;
    }

    async update(id: number, productSupply: ProductSupply): Promise<ProductSupply> {
        const response = await api.patch(`/product-supplies/${id}`, productSupply);
        return response.data;
    }

    async delete(id: number) {
        await api.delete(`/product-supplies/${id}`);
    }

}

export default new ProductSupplyService();