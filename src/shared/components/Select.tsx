interface Props {

    name: string;

    value: string;

    options: string[];

    onChange:
    React.ChangeEventHandler<HTMLSelectElement>;

}

export default function Select({
    name,
    value,
    options,
    onChange
}: Props) {

    return (

        <select

            className="
                border
                rounded
                p-2
                w-full
            "

            name={name}

            value={value}

            onChange={onChange}

        >

            {

                options.map(option => (

                    <option
                        key={option}
                        value={option}
                    >

                        {option}

                    </option>

                ))

            }

        </select>

    );

}