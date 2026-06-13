import {
    useEffect,
    useState
} from "react";

import type { Supply }
    from "../interfaces/Supply";

import SupplyService
    from "../services/SupplyService";

import SupplyModal
    from "../components/SupplyModal";

import ConfirmModal
    from "../../../shared/components/ConfirmModal";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";

export default function SuppliesPage() {

    const [supplies, setSupplies] =
        useState<Supply[]>([]);

    const [selectedSupply, setSelectedSupply] =
        useState<Supply>();

    const [openForm, setOpenForm] =
        useState(false);

    const [openDelete, setOpenDelete] =
        useState(false);

    useEffect(() => {

        loadSupplies();

    }, []);

    async function loadSupplies() {

        const response =
            await SupplyService.findAll();

        setSupplies(response);

    }

    async function saveSupply(
        supply: Supply
    ) {

        if (selectedSupply?.id) {

            await SupplyService.update(
                selectedSupply.id,
                supply
            );

        } else {

            await SupplyService.create(
                supply
            );

        }

        setOpenForm(false);

        loadSupplies();

    }

    async function deleteSupply() {

        if (!selectedSupply?.id)
            return;

        await SupplyService.delete(
            selectedSupply.id
        );

        setOpenDelete(false);

        loadSupplies();

    }

    function editSupply(
        supply: Supply
    ) {

        setSelectedSupply(
            supply
        );

        setOpenForm(true);

    }

    function removeSupply(
        supply: Supply
    ) {

        setSelectedSupply(
            supply
        );

        setOpenDelete(true);

    }

    return (

        <div>

            <div className="flex justify-between mb-5">

                <h1>Supplies</h1>

                <button
                    onClick={() => {

                        setSelectedSupply(undefined);

                        setOpenForm(true);

                    }}
                >
                    New Supply
                </button>

            </div>

            <DataTable<Supply>

                data={supplies}

                columns={[

                    {
                        header: "ID",
                        render: s => s.id
                    },

                    {
                        header: "Name",
                        render: s => s.name
                    },

                    {
                        header: "Stock",
                        render: s => s.stock
                    },

                    {
                        header: "Cost",
                        render: s => `$${s.cost}`
                    },

                    {
                        header: "Actions",

                        render: s =>

                            <DropdownActions

                                onEdit={() =>
                                    editSupply(s)
                                }

                                onDelete={() =>
                                    removeSupply(s)
                                }

                            />
                    }

                ]}

            />

            <SupplyModal

                isOpen={openForm}

                supply={selectedSupply}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={saveSupply}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Delete supply"

                message={`Delete ${selectedSupply?.name}?`}

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deleteSupply}

            />

        </div>

    );

}