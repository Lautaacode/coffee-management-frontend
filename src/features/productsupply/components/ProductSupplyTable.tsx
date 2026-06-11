import type {ProductSupply} from "../interfaces/ProductSupply";

interface Props { productSupplies: ProductSupply[]; }

export default function ProductSupplyTable(
    { productSupplies }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Supply</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    productSupplies.map(
                        item => (
                            <tr
                                key={item.id}
                            >
                                <td>
                                    {
                                        item.product.name
                                    }
                                </td>
                                <td>
                                    {
                                        item.supply.name
                                    }
                                </td>
                                <td>
                                    {
                                        item.quantity
                                    }
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    );
}