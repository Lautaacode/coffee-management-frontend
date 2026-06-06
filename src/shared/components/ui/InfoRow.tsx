type Props = {
    title: string;
    value: string;
};

export default function InfoRow({
    title,
    value,
}: Props) {
    return (
        <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
            <span>{title}</span>

            <span className="text-lg font-bold">
                {value}
            </span>
        </div>
    );
}