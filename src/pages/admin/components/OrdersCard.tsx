export default function OrdersCard() {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-lg font-semibold md:text-xl">
                Pedidos Recientes
            </h2>

            <div className="space-y-3">
                {[
                    "Mesa 3 - Pedido #21",
                    "Mesa 8 - Pedido #18",
                    "Mesa 2 - Pedido #11",
                    "Mesa 5 - Pedido #09",
                ].map((order, index) => (
                    <div
                        key={index}
                        className="rounded-xl bg-slate-800 px-4 py-3 text-sm"
                    >
                        {order}
                    </div>
                ))}
            </div>
        </section>
    );
}