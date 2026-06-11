export interface AuthResponse {
    token: string;
    id: number;
    email: string;
    name: string;
    roles: string[];
}