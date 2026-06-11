import type {
    ReactNode
} from "react";

interface Props {

    children: ReactNode;
}

export default function MainLayout(
    {
        children
    }: Props
) {

    const name =
        localStorage.getItem(
            "name"
        );

    return (

        <div>

            <header>

                <h2>
                    Coffee Management
                </h2>

                <span>
                    {name}
                </span>

            </header>

            <main>

                {children}

            </main>

        </div>
    );
}