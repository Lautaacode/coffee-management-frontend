import { useEffect, useState } from "react";
import UsersService from "../services/UsersService";
import UsersTable from "../components/UsersTable";
import type { Users } from "../interfaces/Users";

export default function UsersPage() {

    const [users, setUsers] = useState<Users[]>([]);

    useEffect(() => { loadUsers(); }, []);

    async function loadUsers() {
        const response = await UsersService.findAll();
        setUsers(response);
    }
    return (
        <div>
            <h1>
                Users
            </h1>
            <UsersTable
                users={users}
            />
        </div>
    );
}