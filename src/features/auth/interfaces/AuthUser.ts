export interface AuthUser {
    id: number;
    name: string;
    email: string;
    roles: string[];
    token: string;
}