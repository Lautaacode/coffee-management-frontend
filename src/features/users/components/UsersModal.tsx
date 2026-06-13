import Modal from "../../../shared/components/Modal";
import type { Users } from "../interfaces/Users";
import UsersForm from "./UsersForm";

interface Props {

    isOpen: boolean;

    users?: Users;

    onClose: () => void;

    onSave:
    (users: Users) => Promise<void>;

}

export default function UsersModal({
    isOpen,
    users,
    onClose,
    onSave
}: Props) {

    return (

        <Modal

            isOpen={isOpen}

            title={
                users
                    ? "Edit User"
                    : "Create User"
            }

            onClose={onClose}

        >

            <UsersForm

                users={users}

                onSubmit={onSave}

            />

        </Modal>

    );

}