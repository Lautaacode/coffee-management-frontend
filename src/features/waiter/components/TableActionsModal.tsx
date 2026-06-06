import {
    ClipboardDocumentListIcon,
    CubeIcon,
    UsersIcon,
    BellIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function TableActionsModal() {
    return (
        <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
                <div>
                    <h3 className="text-xl font-bold">
                        Mesa 3 - Acciones
                    </h3>
                </div>

                <button className="rounded-xl p-2 hover:bg-slate-800">
                    <XMarkIcon className="h-6 w-6" />
                </button>
            </div>

            <div className="space-y-4 p-6">
                <button className="flex w-full items-center gap-4 rounded-2xl bg-cyan-700 px-5 py-4">
                    <ClipboardDocumentListIcon className="h-6 w-6" />

                    Modificar Mesa
                </button>

                <button className="flex w-full items-center gap-4 rounded-2xl bg-violet-700 px-5 py-4">
                    <CubeIcon className="h-6 w-6" />

                    Ver Orden
                </button>

                <button className="flex w-full items-center gap-4 rounded-2xl bg-green-700 px-5 py-4">
                    <UsersIcon className="h-6 w-6" />

                    Generar Payment
                </button>

                <button className="flex w-full items-center gap-4 rounded-2xl bg-red-700 px-5 py-4">
                    <BellIcon className="h-6 w-6" />

                    Cerrar Mesa
                </button>
            </div>
        </div>
    );
}