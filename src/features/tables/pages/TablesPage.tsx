import { useEffect, useState } from "react";
import TablesService from "../services/TablesService";
import Table from "../components/Table";
import type { Tables } from "../interfaces/Tables";

export default function TablesPage() {

    const [
        tables,
        setTables
    ] = useState<Tables[]>([]);

    useEffect(
        () => {

            loadTables();

        },
        []
    );

    async function loadTables() {

        try {

            const response =
                await TablesService.findAll();

            setTables(
                response
            );

        } catch (error) {

            console.error(
                error
            );
        }
    }

    return (

        <div>

            <h1>

                Tables

            </h1>

            <Table
                tables={tables}
            />

        </div>
    );
}