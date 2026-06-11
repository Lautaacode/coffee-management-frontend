import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductService from "../services/ProductService";
import type { Product } from "../interfaces/Product";

export default function CreateProductPage() {

    const navigate = useNavigate();

    const createProduct = async (product: Product) => {
        await ProductService.create(product);
        navigate("/products");
    };

    return (
        <div>
            <h1>
                Create Product
            </h1>
            <ProductForm
                onSubmit={createProduct}
            />
        </div>
    );
}