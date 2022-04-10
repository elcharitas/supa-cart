import { Box, Flex, Text } from "@chakra-ui/react";
import { DataTable } from "@saas-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import Dashboard from "../../../components/Dashboard";
import { lastXMonths, today } from "../../../utils/date";

ChartJS.register(ArcElement, Tooltip, Legend);

export async function getServerSideProps({ params }) {
    const { supabaseClient } = await import("../../../utils/supabase");
    const months = lastXMonths(6);
    const { data } = await supabaseClient
        .from("keepers")
        .select("name,email,owner")
        .eq("owner", params.id);
    today.setMonth(today.getMonth() - 6);
    const { data: invoice } = await supabaseClient
        .from("sales")
        .select("paid,owner,count,created_at")
        .eq("owner", params.id)
        .eq("paid", true)
        .gt("created_at", today.toISOString());
    return {
        props: {
            data,
            stats: {
                labels: months.map((m) => m.substring(0, 3)),
                datasets: [
                    {
                        label: "# of Sales",
                        data: invoice?.map((i) => i.count) || [0, 0],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
        },
    };
}

export default function DashboardIndex({ data = [], stats }) {
    return (
        <Dashboard>
            <Flex direction="row" justifyContent="space-between">
                <Box w={{ sm: "20%" }}>
                    <Pie data={stats} />
                    <Text textAlign="center" mt="2">
                        Sales by Month
                    </Text>
                </Box>
                <Box>&nbsp;</Box>
            </Flex>
            <Box overflowX="auto" mt="32">
                <DataTable
                    columns={[
                        { id: "name", Header: "Name" },
                        { id: "email", Header: "Email" },
                        { id: "sales", Header: "Sales" },
                    ]}
                    data={data ?? []}
                    isSortable
                />
            </Box>
        </Dashboard>
    );
}
