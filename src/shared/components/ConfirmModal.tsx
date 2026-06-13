import Modal from "./Modal";

interface Props {

    isOpen: boolean;

    title: string;

    message: string;

    onClose: () => void;

    onConfirm: () => Promise<void>;

}

export default function ConfirmModal({
    isOpen,
    title,
    message,
    onClose,
    onConfirm
}: Props) {

    return (

        <Modal

            isOpen={isOpen}

            title={title}

            onClose={onClose}

        >

            <p>

                {message}

            </p>

            <div
                className="
                    flex gap-3 mt-5
                "
            >

                <button
                    onClick={onClose}
                >

                    Cancel

                </button>

                <button
                    onClick={onConfirm}
                >

                    Confirm

                </button>

            </div>

        </Modal>

    );

}