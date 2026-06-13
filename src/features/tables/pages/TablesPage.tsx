import {
    useEffect,
    useState
} from "react";

import type { Tables }
    from "../interfaces/Tables";

import TablesService
    from "../services/TablesService";


import ConfirmModal
    from "../../../shared/components/ConfirmModal";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";
import TableModal from "../components/TableModal";

export default function TablesPage() {

    const [tables, setTables] =
        useState<Tables[]>([]);

    const [selectedTable, setSelectedTable] =
        useState<Tables>();

    const [openForm, setOpenForm] =
        useState(false);

    const [openDelete, setOpenDelete] =
        useState(false);

    useEffect(() => {

        loadTables();

    }, []);

    async function loadTables() {

        const response =
            await TablesService.findAll();

        setTables(response);

    }

    async function saveTable(
        table: Tables
    ) {

        if (selectedTable?.id) {

            await TablesService.update(
                selectedTable.id,
                table
            );

        } else {

            await TablesService.create(
                table
            );

        }

        setOpenForm(false);

        loadTables();

    }

    async function deleteTable() {

        if (!selectedTable?.id)
            return;

        await TablesService.delete(
            selectedTable.id
        );

        setOpenDelete(false);

        loadTables();

    }

    function editTable(
        table: Tables
    ) {

        setSelectedTable(table);

        setOpenForm(true);

    }

    function removeTable(
        table: Tables
    ) {

        setSelectedTable(table);

        setOpenDelete(true);

    }

    return (

        <div>

            <div className="flex justify-between mb-5">

                <h1>Tables</h1>

                <button
                    onClick={() => {

                        setSelectedTable(undefined);

                        setOpenForm(true);

                    }}
                >
                    New Table
                </button>

            </div>

            <DataTable<Tables>

                data={tables}

                columns={[

                    {
                        header: "ID",
                        render: t => t.id
                    },

                    {
                        header: "Number",
                        render: t => t.number
                    },

                    {
                        header: "Status",
                        render: t => t.status
                    },

                    {
                        header: "Actions",

                        render: t =>

                            <DropdownActions

                                onEdit={() =>
                                    editTable(t)
                                }

                                onDelete={() =>
                                    removeTable(t)
                                }

                            />
                    }

                ]}

            />

            <TableModal

                isOpen={openForm}

                table={selectedTable}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={saveTable}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Delete table"

                message={`Delete table ${selectedTable?.number}?`}

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deleteTable}

            />

        </div>

    );

}