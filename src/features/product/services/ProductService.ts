import api from "../../../core/api/axios";
import type { Product } from "../interfaces/Product";

class ProductService {

    async findAll(): Promise<Product[]> {
        const response = await api.get("/products");
        return response.data;
    }

    async findById(id: number): Promise<Product> {
        const response = await api.get(`/products/${id}`);
        return response.data;
    }

    async create(product: Product): Promise<Product> {
        const response = await api.post("/products", product);
        return response.data;
    }

    async update(id: number, product: Product): Promise<Product> {
        const response = await api.patch(`/products/${id}`, product);
        return response.data;

    }
    
    async delete(id: number): Promise<void> {
        await api.delete(`/products/${id}`);
    }

    async findActive(): Promise<Product[]> {
        const response = await api.get("/products/active");
        return response.data;
    }

    async search(name: string): Promise<Product[]> {
        const response = await api.get(`/search?name=${name}`);
        return response.data;
    }
}

export default new ProductService();