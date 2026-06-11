import { useState } from "react";
import type { Product } from "../interfaces/Product";
import { PRODUCT_CATEGORIES, type ProductCategory } from "../interfaces/ProductCategory";

interface Props {
    initialData?: Product;
    onSubmit: (product: Product) => void;
}

export default function ProductForm(
    { initialData, onSubmit }: Props
) {

    const [name, setName] = useState(initialData?.name || "");

    const [description, setDescription] = useState(initialData?.description || "");

    const [price, setPrice] = useState(initialData?.price || 0);

    const [stock, setStock] = useState(initialData?.stock || 0);

    const [category, setCategory] = useState<ProductCategory>(initialData?.category || "FOOD");

    const submit =
        (e: React.FormEvent) => {
            e.preventDefault();
            onSubmit({
                id: initialData?.id ?? 0,
                name,
                description,
                price,
                stock,
                active: true,
                category
            });
        };

    return (
        <form onSubmit={submit}>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />
            <input
                placeholder="Description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />
            <input
                type="number"
                value={price}
                onChange={(e) =>
                    setPrice(Number(e.target.value))
                }
            />
            <input
                type="number"
                value={stock}
                onChange={(e) =>
                    setStock(Number(e.target.value))
                }
            />
            <select
                value={category}
                onChange={(e) =>
                    setCategory(
                        e.target.value as ProductCategory
                    )
                }
            >
                {
                    PRODUCT_CATEGORIES.map(category => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))
                }
            </select>
            <button type="submit">
                Save
            </button>
        </form>
    );
}