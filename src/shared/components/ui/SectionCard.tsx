type Props = {
    title: string;
    children: React.ReactNode;
};

export default function SectionCard({
    title,
    children,
}: Props) {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-6 text-xl font-bold">
                {title}
            </h2>

            {children}
        </section>
    );
}