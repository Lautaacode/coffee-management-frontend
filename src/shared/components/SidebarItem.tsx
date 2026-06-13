import { Link } from "react-router-dom";

interface Props {

    to: string;

    text: string;

}

export default function SidebarItem({
    to,
    text
}: Props) {

    return (

        <li>

            <Link

                className="
                hover:text-blue-600
                transition
                "

                to={to}

            >

                {text}

            </Link>

        </li>

    );

}