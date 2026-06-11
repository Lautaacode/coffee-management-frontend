import InfoRow from "../../../shared/components/ui/InfoRow";


export default function StaffCard() {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-lg font-semibold md:text-xl">
                Personal Activo
            </h2>

            <div className="space-y-4">
                <InfoRow title="Meseros" value="3" />
                <InfoRow title="Cocineros" value="2" />
                <InfoRow title="Cajeros" value="1" />
            </div>
        </section>
    );
}