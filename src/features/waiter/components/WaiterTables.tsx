import { BellIcon } from "@heroicons/react/24/outline";

const tables = [
    {
        id: 1,
        status: "Libre",
        color:
            "from-green-700 to-green-600 border-green-500/40",
    },
    {
        id: 2,
        status: "Ocupada",
        color:
            "from-red-700 to-red-600 border-red-500/40",
    },
];

export default function WaiterTables() {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {tables.map((table) => (
                    <div
                        key={table.id}
                        className={`relative overflow-hidden rounded-3xl border bg-linear-to-br p-5 shadow-lg ${table.color}`}
                    >
                        <h3 className="text-3xl font-bold">
                            Mesa {table.id}
                        </h3>

                        <p className="mt-2">
                            {table.status}
                        </p>

                        <button className="mt-8 w-full rounded-2xl bg-black/20 px-4 py-4">
                            Acciones de Mesa
                        </button>

                        {table.id === 2 && (
                            <div className="absolute right-4 top-4">
                                <BellIcon className="h-8 w-8 text-yellow-400" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}