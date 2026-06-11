import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import ProductService
from "../services/ProductService";

import ProductForm
from "../components/ProductForm";

import type {
    Product
} from "../interfaces/Product";

export default function EditProductPage() {

    const {
        id
    } = useParams();

    const navigate =
        useNavigate();

    const [product, setProduct] =
        useState<Product>();

    useEffect(() => {

        loadProduct();

    }, []);

    const loadProduct =
        async () => {

            if (!id) return;

            const response =
                await ProductService.findById(
                    Number(id)
                );

            setProduct(response);
        };

    const updateProduct =
        async (
            updatedProduct: Product
        ) => {

            await ProductService.update(

                Number(id),

                updatedProduct
            );

            navigate(
                "/products"
            );
        };

    if (!product)
        return <h1>Loading...</h1>;

    return (

        <div>

            <h1>

                Edit Product

            </h1>

            <ProductForm

                initialData={product}

                onSubmit={updateProduct}

            />

        </div>
    );
}