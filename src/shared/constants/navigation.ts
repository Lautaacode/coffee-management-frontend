import {
    HomeIcon,
    ClipboardDocumentListIcon,
    BellIcon,
    CubeIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

export const navigationByRole = {
    ADMIN: [
        {
            name: "Dashboard",
            icon: HomeIcon,
        },
        {
            name: "Pedidos",
            icon: ClipboardDocumentListIcon,
        },
        {
            name: "Notificaciones",
            icon: BellIcon,
        },
        {
            name: "Inventario",
            icon: CubeIcon,
        },
        {
            name: "Personal",
            icon: UsersIcon,
        },
    ],

    COOK: [
        {
            name: "Kitchen",
            icon:
                ClipboardDocumentListIcon,
        },
    ],

    WAITER: [
        {
            name: "Mesas",
            icon: HomeIcon,
        },
    ],
};