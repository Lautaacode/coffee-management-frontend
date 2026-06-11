import { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import type { Product } from "../interfaces/Product";
import ProductService from "../services/ProductService";


export default function ProductsPage() {

    const [
        products,
        setProducts
    ] = useState<Product[]>([]);

    const loadProducts =
        async () => {

            try {

                const data =
                    await ProductService.findAll();

                setProducts(data);

            } catch (error) {

                console.error(error);
            }
        };

    useEffect(() => {

        loadProducts();

    }, []);

    const deleteProduct =
        async (
            id: number
        ) => {

            try {

                await ProductService.delete(id);

                loadProducts();

            } catch (error) {

                console.error(error);
            }
        };

    return (

        <div>

            <h1>
                Products
            </h1>

            <ProductTable
                products={products}
                onDelete={deleteProduct}
            />

        </div>
    );
}