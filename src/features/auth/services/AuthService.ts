import api from "../../../core/api/axios";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { AuthResponse } from "../interfaces/AuthResponse";

class AuthService {

    async login(
        request: LoginRequest
    ): Promise<AuthResponse> {
        const response =
            await api.post(
                "/auth/login",
                request
            );
        return response.data;
    }

    logout() {
        localStorage.clear();
    }
}

export default new AuthService();