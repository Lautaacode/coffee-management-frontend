import api from "../../../core/api/axios";
import type { ProductSupply } from "../interfaces/ProductSupply";

class ProductSupplyService {

    async findAll(): Promise<ProductSupply[]> {
        const response = await api.get("/product-supplies");
        return response.data;
    }

    async findById(id: number): Promise<ProductSupply> {
        const response = await api.get(`/product-supplies/${id}`);
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

    async delete(id: number): Promise<void> {
        await api.delete(`/product-supplies/${id}`);
    }

    async findByProduct(productId: number): Promise<ProductSupply[]> {
        const response = await api.get(`/product-supplies/product/${productId}`);
        return response.data;
    }

    async findBySupply(supplyId: number): Promise<ProductSupply[]> {
        const response = await api.get(`/product-supplies/supply/${supplyId}`);
        return response.data;
    }
}

export default new ProductSupplyService();