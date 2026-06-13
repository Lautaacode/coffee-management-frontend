interface Props {

    isOpen: boolean;

    title: string;

    children: React.ReactNode;

    onClose: () => void;

}

export default function Modal({
    isOpen,
    title,
    children,
    onClose
}: Props) {

    if (!isOpen) return null;

    return (

        <div
            className="
            fixed inset-0
            bg-black/50
            flex items-center justify-center"
        >

            <div
                className="
                bg-white
                rounded-lg
                shadow-lg
                p-6
                w-125"
            >

                <div
                    className="
                    flex justify-between mb-5"
                >

                    <h2
                        className="
                        text-xl font-bold"
                    >
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                    >
                        X
                    </button>

                </div>

                {children}

            </div>

        </div>

    );
}