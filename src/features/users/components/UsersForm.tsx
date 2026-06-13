import { useState } from "react";
import type { Users } from "../interfaces/Users";

interface Props {

    users?: Users;

    onSubmit:
    (users: Users) => Promise<void>;

}

export default function UsersForm({
    users,
    onSubmit
}: Props) {

    const [form, setForm] =
        useState<Users>(

            users ??

            {

                name: "",
                lastName: "",
                email: "",
                dni: "",
                password: "",
                roles: ["WAITER"]

            }

        );

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });

    }

    async function submit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        await onSubmit(form);

    }

    return (

        <form
            onSubmit={submit}
            className="flex flex-col gap-3"
        >

            <input
                name="name"
                value={form.name}
                placeholder="Name"
                onChange={handleChange}
            />

            <input
                name="lastName"
                value={form.lastName}
                placeholder="Last name"
                onChange={handleChange}
            />

            <input
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange}
            />

            <input
                name="dni"
                value={form.dni}
                placeholder="DNI"
                onChange={handleChange}
            />

            <input
                name="password"
                type="password"
                value={form.password}
                placeholder="Password"
                onChange={handleChange}
            />

            <button>

                Save

            </button>

        </form>

    );

}