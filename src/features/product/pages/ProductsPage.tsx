
import {
    useEffect,
    useState
} from "react";

import ProductService
    from "../services/ProductService";

import ProductModal
    from "../components/ProductModal";


import type {
    Product
} from "../interfaces/Product";

import DataTable
    from "../../../shared/components/DataTable";

import DropdownActions
    from "../../../shared/components/DropdownActions";
import ConfirmModal from "../../../shared/components/ConfirmModal";

export default function ProductsPage() {

    const [
        products,
        setProducts
    ] = useState<Product[]>([]);

    const [
        selectedProduct,
        setSelectedProduct
    ] = useState<Product>();

    const [
        openForm,
        setOpenForm
    ] = useState(false);

    const [
        openDelete,
        setOpenDelete
    ] = useState(false);

    useEffect(() => {

        loadProducts();

    }, []);

    async function loadProducts() {

        const response =
            await ProductService.findAll();

        setProducts(response);

    }

    async function saveProduct(
        product: Product
    ) {

        if (selectedProduct?.id) {

            await ProductService.update(
                selectedProduct.id,
                product
            );

        } else {

            await ProductService.create(
                product
            );

        }

        setOpenForm(false);

        loadProducts();

    }

    async function deleteProduct() {

        if (!selectedProduct?.id)
            return;

        await ProductService.delete(
            selectedProduct.id
        );

        setOpenDelete(false);

        loadProducts();

    }

    function editProduct(
        product: Product
    ) {

        setSelectedProduct(
            product
        );

        setOpenForm(true);

    }

    function removeProduct(
        product: Product
    ) {

        setSelectedProduct(
            product
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

                <h1 className="text-2xl">

                    Products

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

                        setSelectedProduct(
                            undefined
                        );

                        setOpenForm(true);

                    }}

                >

                    New Product

                </button>

            </div>

            <DataTable<Product>

                data={products}

                columns={[

                    {
                        header: "ID",

                        render: p =>
                            p.id
                    },

                    {
                        header: "Name",

                        render: p =>
                            p.name
                    },

                    {
                        header: "Price",

                        render: p =>
                            `$${p.price}`
                    },

                    {
                        header: "Stock",

                        render: p =>
                            p.stock
                    },

                    {
                        header: "Category",

                        render: p =>
                            p.category
                    },

                    {
                        header: "Actions",

                        render: p =>

                            <DropdownActions

                                onEdit={() =>
                                    editProduct(p)
                                }

                                onDelete={() =>
                                    removeProduct(p)
                                }

                            />

                    }

                ]}

            />

            <ProductModal

                isOpen={openForm}

                product={selectedProduct}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={saveProduct}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Delete Product"

                message={
                    `Delete ${selectedProduct?.name}?`
                }

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deleteProduct}

            />

        </div>

    );

}
