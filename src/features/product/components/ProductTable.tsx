import type { Product } from "../interfaces/Product";

interface Props {

    products: Product[];

    onDelete: (
        id: number
    ) => void;
}

export default function ProductTable(
    {
        products,
        onDelete
    }: Props
) {

    return (

        <table>

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Price</th>

                    <th>Stock</th>

                    <th>Category</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {
                    products.map(
                        product => (

                            <tr
                                key={product.id}
                            >

                                <td>
                                    {product.id}
                                </td>

                                <td>
                                    {product.name}
                                </td>

                                <td>
                                    {product.price}
                                </td>

                                <td>
                                    {product.stock}
                                </td>

                                <td>
                                    {product.category}
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            onDelete(
                                                product.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        )
                    )
                }

            </tbody>

        </table>
    );
}