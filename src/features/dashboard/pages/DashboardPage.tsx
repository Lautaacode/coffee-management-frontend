import Card
from "../../../shared/components/Card";

export default function DashboardPage() {

    return (

        <div>

            <h1
                className="
                text-3xl
                mb-8
                "
            >

                Dashboard

            </h1>

            <div
                className="
                grid
                grid-cols-4
                gap-5
                "
            >

                <Card
                    title="Products"
                    value={25}
                />

                <Card
                    title="Users"
                    value={8}
                />

                <Card
                    title="Open Tables"
                    value={4}
                />

                <Card
                    title="Orders"
                    value={9}
                />

                <Card
                    title="Pending Payments"
                    value={3}
                />

            </div>

        </div>

    );

}