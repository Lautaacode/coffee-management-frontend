export default function DashboardPage() {

    const name = localStorage.getItem("name");

    return (

        <div>

            <h1>
                Bienvenido {name}
            </h1>

        </div>
    );
}