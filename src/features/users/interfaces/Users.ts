import type { RoleName } from "../../role/interfaces/RoleName";

export interface Users {
    id: number;
    name: string;
    lastName: string;
    email: string;
    dni: string;
    password?: string;
    roles: RoleName[];
}