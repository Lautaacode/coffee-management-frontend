interface Props {

    name: string;

    value: string | number;

    type?: string;

    placeholder?: string;

    onChange:
    React.ChangeEventHandler<HTMLInputElement>;

}

export default function Input({
    name,
    value,
    type = "text",
    placeholder,
    onChange
}: Props) {

    return (

        <input

            className="
                border
                rounded
                p-2
                w-full
            "

            name={name}

            value={value}

            type={type}

            placeholder={placeholder}

            onChange={onChange}

        />

    );

}