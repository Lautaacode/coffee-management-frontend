import type { ProductSupply } from "../interfaces/ProductSupply";
import DropdownActions from "../../../shared/components/DropdownActions";

interface Props {

    productSupplies: ProductSupply[];

    onEdit: (
        productSupply: ProductSupply
    ) => void;

    onDelete: (
        productSupply: ProductSupply
    ) => void;

}

export default function ProductSupplyTable({
    productSupplies,
    onEdit,
    onDelete
}: Props) {

    return (

        <table>

            <thead>

                <tr>

                    <th>Product</th>
                    <th>Supply</th>
                    <th>Quantity</th>
                    <th></th>

                </tr>

            </thead>

            <tbody>

                {

                    productSupplies.map(productSupply => (

                        <tr key={productSupply.id}>

                            <td>

                                {productSupply.product.name}

                            </td>

                            <td>

                                {productSupply.supply.name}

                            </td>

                            <td>

                                {productSupply.quantity}

                            </td>

                            <td>

                                <DropdownActions

                                    onEdit={() =>
                                        onEdit(productSupply)
                                    }

                                    onDelete={() =>
                                        onDelete(productSupply)
                                    }

                                />

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}