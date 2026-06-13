import Modal from "../../../shared/components/Modal";
import ProductSupplyForm from "./ProductSupplyForm";

import type { ProductSupply }
from "../interfaces/ProductSupply";

interface Props {

    isOpen: boolean;

    productSupply?: ProductSupply;

    onClose: () => void;

    onSave:
        (
            productSupply: ProductSupply
        ) => Promise<void>;

}

export default function ProductSupplyModal({
    isOpen,
    productSupply,
    onClose,
    onSave
}: Props) {

    return (

        <Modal

            isOpen={isOpen}

            title={
                productSupply
                    ? "Edit Product Supply"
                    : "Create Product Supply"
            }

            onClose={onClose}

        >

            <ProductSupplyForm

                productSupply={productSupply}

                onSubmit={onSave}

            />

        </Modal>

    );

}