"use client";

import { useState } from "react";
import Navbar from "../shared/components/navbar/Navbar";
import DesktopSidebar from "../shared/components/sidebar/DesktopSidebar";
import MobileSidebar from "../shared/components/sidebar/MobileSidebar";



type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({
    children,
}: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <div className="flex">
                <DesktopSidebar />

                <MobileSidebar
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />

                <main className="flex-1 p-4 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}