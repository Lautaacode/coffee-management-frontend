export default function SalesCard() {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold md:text-xl">
                        Ventas del Día
                    </h2>

                    <p className="mt-2 text-4xl font-bold">
                        $12,345
                    </p>
                </div>

                <div className="hidden h-32 items-end gap-2 md:flex">
                    {[30, 60, 40, 70, 55, 80, 95].map(
                        (height, index) => (
                            <div
                                key={index}
                                className="w-6 rounded-md bg-white/80"
                                style={{
                                    height: `${height}%`,
                                }}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}