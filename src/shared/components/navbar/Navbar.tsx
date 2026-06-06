import { Bars3Icon } from "@heroicons/react/24/outline";

type Props = {
    setMobileMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export default function Navbar({
    setMobileMenuOpen,
}: Props) {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
            <nav className="relative flex items-center justify-between px-4 py-4 lg:py-9">

                {/* IZQUIERDA */}
                <div className="flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="rounded-xl bg-slate-800 p-2 lg:hidden"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>

                {/* LOGO CENTRADO */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <img
                        src="/logo.webp"
                        className="h-20 w-auto object-contain"
                        alt="Logo"
                    />
                </div>

                {/* DERECHA */}
                <div className="flex items-center">
                    {/* acciones futuras */}
                </div>

            </nav>
        </header>
    );
}