import api from "../../../core/api/axios";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { AuthUser } from "../interfaces/AuthUser";

class AuthService {

    async login(
        request: LoginRequest
    ): Promise<AuthUser> {
        const response = await api.post("/auth/login", request);
        return response.data;
    }

    logout() {
        localStorage.clear();
    }
}

export default new AuthService();