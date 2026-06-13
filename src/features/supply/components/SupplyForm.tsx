import { useState } from "react";
import type { Supply } from "../interfaces/Supply";

interface Props {

    supply?: Supply;

    onSubmit:
        (supply: Supply) => Promise<void>;

}

export default function SupplyForm({
    supply,
    onSubmit
}: Props) {

    const [form, setForm] =
        useState<Supply>(

            supply ??

            {

                name: "",

                stock: 0,

                cost: 0

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
                type="number"
                name="stock"
                value={form.stock}
                placeholder="Stock"
                onChange={handleChange}
            />

            <input
                type="number"
                name="cost"
                value={form.cost}
                placeholder="Cost"
                onChange={handleChange}
            />

            <button>

                Save

            </button>

        </form>

    );

}