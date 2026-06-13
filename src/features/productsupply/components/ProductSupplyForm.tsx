import { useEffect, useState } from "react";

import type { ProductSupply } from "../interfaces/ProductSupply";

import type { Product } from "../../product/interfaces/Product";
import type { Supply } from "../../supply/interfaces/Supply";

import ProductService from "../../product/services/ProductService";
import SupplyService from "../../supply/services/SupplyService";

interface Props {

    productSupply?: ProductSupply;

    onSubmit:
        (
            productSupply: ProductSupply
        ) => Promise<void>;

}

export default function ProductSupplyForm({
    productSupply,
    onSubmit
}: Props) {

    const [products, setProducts] =
        useState<Product[]>([]);

    const [supplies, setSupplies] =
        useState<Supply[]>([]);

    const [form, setForm] =
        useState<ProductSupply>(

            productSupply ?? {

                product: {} as Product,

                supply: {} as Supply,

                quantity: 0

            }

        );

    useEffect(() => {

        loadProducts();
        loadSupplies();

    }, []);

    async function loadProducts() {

        setProducts(
            await ProductService.findAll()
        );

    }

    async function loadSupplies() {

        setSupplies(
            await SupplyService.findAll()
        );

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
            className="flex flex-col gap-4"
        >

            <select

                value={form.product?.id}

                onChange={e => {

                    const product =
                        products.find(
                            p =>
                                p.id ===
                                Number(
                                    e.target.value
                                )
                        );

                    if (product) {

                        setForm({

                            ...form,

                            product

                        });

                    }

                }}

            >

                <option>

                    Select product

                </option>

                {

                    products.map(product => (

                        <option

                            key={product.id}

                            value={product.id}

                        >

                            {product.name}

                        </option>

                    ))

                }

            </select>

            <select

                value={form.supply?.id}

                onChange={e => {

                    const supply =
                        supplies.find(
                            s =>
                                s.id ===
                                Number(
                                    e.target.value
                                )
                        );

                    if (supply) {

                        setForm({

                            ...form,

                            supply

                        });

                    }

                }}

            >

                <option>

                    Select supply

                </option>

                {

                    supplies.map(supply => (

                        <option

                            key={supply.id}

                            value={supply.id}

                        >

                            {supply.name}

                        </option>

                    ))

                }

            </select>

            <input

                type="number"

                value={form.quantity}

                onChange={e =>
                    setForm({

                        ...form,

                        quantity:
                            Number(
                                e.target.value
                            )

                    })
                }

            />

            <button>

                Save

            </button>

        </form>

    );

}