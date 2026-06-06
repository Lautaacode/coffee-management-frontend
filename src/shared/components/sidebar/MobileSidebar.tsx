import { XMarkIcon } from "@heroicons/react/24/outline";

import { navigationByRole } from "../../constants/navigation";

type Props = {
    mobileMenuOpen: boolean;

    setMobileMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export default function MobileSidebar({
    mobileMenuOpen,
    setMobileMenuOpen,
}: Props) {
    const role = "ADMIN";

    const navigation =
        navigationByRole[role];

    return (
        <div
            className={`fixed inset-0 z-50 bg-black/50 transition-all duration-300 lg:hidden ${mobileMenuOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
        >
            <div
                className={`h-full w-72 border-r border-slate-800 bg-slate-900 p-6 transition-transform duration-300 ${mobileMenuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">
                        Buen Sabor
                    </h1>

                    <button
                        onClick={() =>
                            setMobileMenuOpen(false)
                        }
                        className="rounded-xl bg-slate-800 p-2"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="mt-8 space-y-3">
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
            </div>
        </div>
    );
}