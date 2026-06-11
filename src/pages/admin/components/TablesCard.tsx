const tables = [
    { id: 1, status: "Libre", color: "bg-green-500" },
    { id: 2, status: "Ocupada", color: "bg-red-500" },
    { id: 3, status: "En Pago", color: "bg-yellow-500" },
    { id: 4, status: "Libre", color: "bg-green-500" },
];

export default function TablesCard() {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold md:text-xl">
                    Estado de Mesas
                </h2>

                <span className="text-sm text-slate-400">
                    12 mesas activas
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {tables.map((table) => (
                    <div
                        key={table.id}
                        className={`${table.color} flex min-h-25 flex-col items-center justify-center rounded-2xl p-4 shadow-md`}
                    >
                        <span className="text-2xl font-bold">
                            #{table.id}
                        </span>

                        <span className="mt-1 text-sm font-medium">
                            {table.status}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}