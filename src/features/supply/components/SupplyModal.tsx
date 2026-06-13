import Modal from "../../../shared/components/Modal";
import SupplyForm from "./SupplyForm";
import type { Supply } from "../interfaces/Supply";

interface Props {

    isOpen: boolean;

    supply?: Supply;

    onClose: () => void;

    onSave:
        (supply: Supply) => Promise<void>;

}

export default function SupplyModal({
    isOpen,
    supply,
    onClose,
    onSave
}: Props) {

    return (

        <Modal

            isOpen={isOpen}

            title={
                supply
                    ? "Edit Supply"
                    : "Create Supply"
            }

            onClose={onClose}

        >

            <SupplyForm

                supply={supply}

                onSubmit={onSave}

            />

        </Modal>

    );

}