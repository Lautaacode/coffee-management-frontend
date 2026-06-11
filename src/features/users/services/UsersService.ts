import api from "../../../core/api/axios";
import type { Users } from "../interfaces/Users";



class UsersService {

    async findAll(): Promise<Users[]> {
        const response = await api.get("/users");
        return response.data;
    }

    async findById(id: number): Promise<Users> {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }

    async create(users: Users): Promise<Users> {
        const response = await api.post("/users", users);

        return response.data;
    }

    async update(id: number, users: Users): Promise<Users> {
        const response = await api.patch(`/users/${id}`, users);
        return response.data;
    }

    async delete(id: number): Promise<void> {
        await api.delete(`/users/${id}`);
    }
}

export default new UsersService();