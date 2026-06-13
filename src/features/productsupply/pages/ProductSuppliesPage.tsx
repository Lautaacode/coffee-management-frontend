
import {
    useEffect,
    useState
} from "react";

import type {
    ProductSupply
} from "../interfaces/ProductSupply";

import ProductSupplyService
    from "../services/ProductSupplyService";

import ProductSupplyModal
    from "../components/ProductSupplyModal";

import ConfirmModal
    from "../../../shared/components/ConfirmModal";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";

export default function ProductSuppliesPage() {

    const [
        productSupplies,
        setProductSupplies
    ] = useState<ProductSupply[]>([]);

    const [
        selectedProductSupply,
        setSelectedProductSupply
    ] = useState<ProductSupply>();

    const [
        openForm,
        setOpenForm
    ] = useState(false);

    const [
        openDelete,
        setOpenDelete
    ] = useState(false);

    useEffect(() => {

        loadProductSupplies();

    }, []);

    async function loadProductSupplies() {

        const response =
            await ProductSupplyService.findAll();

        setProductSupplies(
            response
        );

    }

    async function saveProductSupply(
        productSupply: ProductSupply
    ) {

        if (
            selectedProductSupply?.id
        ) {

            await ProductSupplyService.update(
                selectedProductSupply.id,
                productSupply
            );

        } else {

            await ProductSupplyService.create(
                productSupply
            );

        }

        setOpenForm(false);

        loadProductSupplies();

    }

    async function deleteProductSupply() {

        if (
            !selectedProductSupply?.id
        )
            return;

        await ProductSupplyService.delete(
            selectedProductSupply.id
        );

        setOpenDelete(false);

        loadProductSupplies();

    }

    function editProductSupply(
        productSupply: ProductSupply
    ) {

        setSelectedProductSupply(
            productSupply
        );

        setOpenForm(true);

    }

    function removeProductSupply(
        productSupply: ProductSupply
    ) {

        setSelectedProductSupply(
            productSupply
        );

        setOpenDelete(true);

    }

    return (

        <div>

            <div
                className="
                flex
                justify-between
                mb-5
                "
            >

                <h1
                    className="text-2xl"
                >

                    Product Supplies

                </h1>

                <button

                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded
                    "

                    onClick={() => {

                        setSelectedProductSupply(
                            undefined
                        );

                        setOpenForm(true);

                    }}

                >

                    New Relation

                </button>

            </div>

            <DataTable<ProductSupply>

                data={productSupplies}

                columns={[

                    {
                        header: "ID",

                        render: ps =>
                            ps.id
                    },

                    {
                        header: "Product",

                        render: ps =>
                            ps.product?.name
                    },

                    {
                        header: "Supply",

                        render: ps =>
                            ps.supply?.name
                    },

                    {
                        header: "Quantity",

                        render: ps =>
                            ps.quantity
                    },

                    {
                        header: "Actions",

                        render: ps =>

                            <DropdownActions

                                onEdit={() =>
                                    editProductSupply(ps)
                                }

                                onDelete={() =>
                                    removeProductSupply(ps)
                                }

                            />

                    }

                ]}

            />

            <ProductSupplyModal

                isOpen={openForm}

                productSupply={
                    selectedProductSupply
                }

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={
                    saveProductSupply
                }

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Delete relation"

                message={
                    `Delete relation between ${selectedProductSupply?.product?.name} and ${selectedProductSupply?.supply?.name}?`
                }

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={
                    deleteProductSupply
                }

            />

        </div>

    );

}
