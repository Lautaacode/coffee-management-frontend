import { useState } from "react";

interface Props {

    onEdit: () => void;

    onDelete: () => void;

}

export default function DropdownActions({
    onEdit,
    onDelete
}: Props) {

    const [open, setOpen] =
        useState(false);

    return (

        <div className="relative">

            <button

                className="
                border
                rounded
                px-3
                py-1
                "

                onClick={() =>
                    setOpen(!open)
                }

            >

                ⋮

            </button>

            {

                open &&

                <div
                    className="
                    absolute
                    right-0
                    bg-white
                    border
                    shadow
                    rounded
                    w-32
                    "
                >

                    <button

                        className="
                        block
                        p-2
                        w-full
                        text-left
                        hover:bg-gray-100
                        "

                        onClick={onEdit}

                    >

                        Edit

                    </button>

                    <button

                        className="
                        block
                        p-2
                        w-full
                        text-left
                        hover:bg-red-100
                        "

                        onClick={onDelete}

                    >

                        Delete

                    </button>

                </div>

            }

        </div>

    );

}