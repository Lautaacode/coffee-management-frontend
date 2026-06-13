import React from "react";

interface Column<T> {

    header: string;

    render: (
        row: T
    ) => React.ReactNode;

}

interface Props<T> {

    data: T[];

    columns: Column<T>[];

}

export default function DataTable<T>({
    data,
    columns
}: Props<T>) {

    return (

        <table className="w-full border">

            <thead>

                <tr className="bg-gray-200">

                    {

                        columns.map(column => (

                            <th
                                key={column.header}
                                className="p-3 text-left"
                            >

                                {column.header}

                            </th>

                        ))

                    }

                </tr>

            </thead>

            <tbody>

                {

                    data.map((row, index) => (

                        <tr
                            key={index}
                            className="border-t"
                        >

                            {

                                columns.map(column => (

                                    <td
                                        key={column.header}
                                        className="p-3"
                                    >

                                        {

                                            column.render(
                                                row
                                            )

                                        }

                                    </td>

                                ))

                            }

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}