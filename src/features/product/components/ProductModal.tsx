import Modal from "../../../shared/components/Modal";
import ProductForm from "./ProductForm";
import type { Product } from "../interfaces/Product";

interface Props {

    isOpen: boolean;

    product?: Product;

    onClose: () => void;

    onSave: (
        product: Product
    ) => Promise<void>;

}

export default function ProductModal({
    isOpen,
    product,
    onClose,
    onSave
}: Props) {

    return (

        <Modal
            isOpen={isOpen}
            title={
                product
                    ? "Edit Product"
                    : "Create Product"
            }
            onClose={onClose}
        >

            <ProductForm
                product={product}
                onSubmit={onSave}
            />

        </Modal>

    );

}