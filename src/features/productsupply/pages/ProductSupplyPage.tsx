import { useEffect, useState } from "react";

import ProductSupplyService from "../services/ProductSupplyService";

import ProductSupplyTable from "../components/ProductSupplyTable";

import type { ProductSupply } from "../interfaces/ProductSupply";

export default function ProductSupplyPage() {

    const [productSupplies, setProductSupplies] = useState<ProductSupply[]>([]);

    useEffect(() => { load() }, []);

    async function load() {
        const response = await ProductSupplyService.findAll();
        setProductSupplies(response);
    }

    return (
        <div>
            <h1>
                Product Supplies
            </h1>
            <ProductSupplyTable
                productSupplies={
                    productSupplies
                }
            />
        </div>
    );
}