import type { Users } from "../interfaces/Users";

interface Props { users: Users[]; }

export default function UsersTable(
    { users }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DNI</th>
                    <th>Roles</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(
                        user => (
                            <tr
                                key={user.id}
                            >
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.dni}
                                </td>
                                <td>
                                    {
                                        user.roles.join(
                                            ", "
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    );
}