import type { Tables } from "../interfaces/Tables";

interface Props {

    tables: Tables[];
}

export default function Table({ tables }: Props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Number</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    tables.map(table => (
                        <tr key={table.id}>
                            <td>
                                {table.id}
                            </td>
                            <td>
                                {table.number}
                            </td>
                            <td>
                                {table.status}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}