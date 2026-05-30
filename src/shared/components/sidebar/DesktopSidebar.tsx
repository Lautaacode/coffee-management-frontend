import { navigationByRole } from "../../constants/navigation";


export default function DesktopSidebar() {
    const role = "ADMIN";

    const navigation =
        navigationByRole[role];

    return (
        <aside className="hidden min-h-[calc(100vh-81px)] w-72 border-r border-slate-800 bg-slate-900 lg:flex lg:flex-col">
            <div className="flex flex-col items-center border-b border-slate-800 py-8">
                <img
                    src="https://i.pravatar.cc/120"
                    className="h-24 w-24 rounded-full border-4 border-slate-700"
                />

                <h2 className="mt-4 text-lg font-semibold">
                    Mateo C.
                </h2>

                <p className="text-sm text-slate-400">
                    Gerente
                </p>
            </div>

            <div className="mt-8 space-y-3 px-4">
                {navigation.map((item) => (
                    <button
                        key={item.name}
                        className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        <item.icon className="h-6 w-6" />

                        {item.name}
                    </button>
                ))}
            </div>
        </aside>
    );
}