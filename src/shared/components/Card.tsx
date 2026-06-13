interface Props {
    title: string;
    value: number | string;
}

export default function Card({
    title,
    value
}: Props) {

    return (

        <div
            className="
            shadow
            rounded
            p-5
            bg-white
            "
        >

            <h2>

                {title}

            </h2>

            <h1
                className="
                text-3xl
                font-bold
                "
            >

                {value}

            </h1>

        </div>

    );

}