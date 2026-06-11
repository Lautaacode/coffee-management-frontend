import { BellIcon } from "@heroicons/react/24/outline";

const orders = [
    {
        id: 48,
        mesa: 12,
        tiempo: "10m",
        alert: true,
    },
    {
        id: 50,
        mesa: 6,
        tiempo: "5m",
    },
];

export default function KitchenMonitor() {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">
                        Monitor de Cocina
                    </h2>

                    <p className="text-sm text-slate-400">
                        Pedidos en preparación
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="relative rounded-3xl bg-white p-6 text-slate-900"
                    >
                        {order.alert && (
                            <div className="absolute right-4 top-4">
                                <BellIcon className="h-8 w-8 text-yellow-500" />
                            </div>
                        )}

                        <h3 className="text-2xl font-bold">
                            #{order.id}
                        </h3>

                        <p className="mt-2">
                            Mesa {order.mesa}
                        </p>

                        <span className="mt-6 block text-5xl font-bold text-green-700">
                            {order.tiempo}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}