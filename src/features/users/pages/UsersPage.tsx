import { useEffect, useState } from "react";

import type { Users } from "../interfaces/Users";

import UsersService from "../services/UsersService";

import UsersModal from "../components/UsersModal";

import ConfirmModal from "../../../shared/components/ConfirmModal";
import DropdownActions from "../../../shared/components/DropdownActions";
import DataTable from "../../../shared/components/DataTable";

export default function UsersPage() {

    const [users, setUsers] = useState<Users[]>([]);

    const [selectedUser, setSelectedUser] = useState<Users>();

    const [openForm, setOpenForm] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    useEffect(() => {

        loadUsers();

    }, []);

    async function loadUsers() {

        const response =
            await UsersService.findAll();

        setUsers(response);

    }

    async function saveUser(
        user: Users
    ) {

        if (selectedUser?.id) {

            await UsersService.update(
                selectedUser.id,
                user
            );

        } else {

            await UsersService.create(
                user
            );

        }

        setOpenForm(false);

        loadUsers();

    }

    async function deleteUser() {

        if (!selectedUser?.id)
            return;

        await UsersService.delete(
            selectedUser.id
        );

        setOpenDelete(false);

        loadUsers();

    }

    function editUser(
        user: Users
    ) {

        setSelectedUser(user);

        setOpenForm(true);

    }

    function removeUser(
        user: Users
    ) {

        setSelectedUser(user);

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

                    Users

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

                        setSelectedUser(undefined);

                        setOpenForm(true);

                    }}

                >

                    New User

                </button>

            </div>

            <DataTable<Users>

                data={users}

                columns={[

                    {
                        header: "ID",
                        render: u => u.id
                    },

                    {
                        header: "Name",
                        render: u => u.name
                    },

                    {
                        header: "Lastname",
                        render: u => u.lastName
                    },

                    {
                        header: "Email",
                        render: u => u.email
                    },

                    {
                        header: "DNI",
                        render: u => u.dni
                    },

                    {
                        header: "Actions",

                        render: u =>

                            <DropdownActions

                                onEdit={() =>
                                    editUser(u)
                                }

                                onDelete={() =>
                                    removeUser(u)
                                }

                            />

                    }

                ]}

            />

            <UsersModal

                isOpen={openForm}

                users={selectedUser}

                onClose={() =>
                    setOpenForm(false)
                }

                onSave={saveUser}

            />

            <ConfirmModal

                isOpen={openDelete}

                title="Delete user"

                message={
                    `Delete ${selectedUser?.name}?`
                }

                onClose={() =>
                    setOpenDelete(false)
                }

                onConfirm={deleteUser}

            />

        </div>

    );

}