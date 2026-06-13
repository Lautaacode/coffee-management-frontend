
import { useEffect, useState } from "react";

interface Props {

    isOpen: boolean;

    table?: any;

    onClose: () => void;

    onSave: (table: any) => void;

}

export default function TableModal({

    isOpen,

    table,

    onClose,

    onSave

}: Props) {

    const [number, setNumber] = useState(0);

    const [status, setStatus] = useState("");

    useEffect(() => {

        if (table) {

            setNumber(
                table.number
            );

            setStatus(
                table.status
            );

        } else {

            setNumber(0);

            setStatus("");

        }

    }, [table]);

    if (!isOpen)
        return null;

    return (

        <div
            className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            "
        >

            <div
                className="
                bg-white
                p-6
                rounded
                w-96
                "
            >

                <h2
                    className="
                    text-xl
                    mb-5
                    "
                >

                    {
                        table
                            ? "Edit Table"
                            : "New Table"
                    }

                </h2>

                <div className="mb-4">

                    <label>

                        Number

                    </label>

                    <input

                        className="
                        border
                        w-full
                        p-2
                        "

                        value={number}

                        onChange={e =>
                            setNumber(
                                Number(
                                    e.target.value
                                )
                            )
                        }

                    />

                </div>

                <div className="mb-4">

                    <label>

                        Status

                    </label>

                    <input

                        className="
                        border
                        w-full
                        p-2
                        "

                        value={status}

                        onChange={e =>
                            setStatus(
                                e.target.value
                            )
                        }

                    />

                </div>

                <div
                    className="
                    flex
                    justify-end
                    gap-2
                    "
                >

                    <button

                        className="
                        border
                        px-4
                        py-2
                        "

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="
                        bg-blue-600
                        text-white
                        px-4
                        py-2
                        "

                        onClick={() =>
                            onSave({
                                number,
                                status
                            })
                        }

                    >

                        Save

                    </button>

                </div>

            </div>

        </div>

    );

}

