import { useState } from "react";
import type { Product } from "../interfaces/Product";

interface Props {

    product?: Product;

    onSubmit: (
        product: Product
    ) => Promise<void>;

}

export default function ProductForm({
    product,
    onSubmit
}: Props) {

    const [form,setForm] = useState<Product>(
            product ?? {
                name: "",
                description: "",
                price: 0,
                stock: 0,
                category: "FOOD",
                active: true

            }
        );

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement
            |
            HTMLSelectElement
        >
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
            className="
            flex flex-col gap-3"
        >

            <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
            />

            <input
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
            />

            <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
            />

            <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
            />

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
            >

                <option value="FOOD">

                    FOOD

                </option>

                <option value="DRINK">

                    DRINK

                </option>

            </select>

            <button>

                Save

            </button>

        </form>

    );

}