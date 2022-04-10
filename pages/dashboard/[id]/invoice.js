import { AutoForm, useAuth, useSnackbar } from "@saas-ui/react";
import { useRouter } from "next/router";

import Dashboard from "../../../components/Dashboard";
import { supabaseClient } from "../../../utils/supabase";

export async function getServerSideProps({ params }) {
    const { supabaseClient } = await import("../../../utils/supabase");
    const { data } = await supabaseClient
        .from("products")
        .select("name,id")
        .eq("owner", params.id);
    return {
        props: {
            products: data?.map((d) => ({ label: d.name, value: d.id })),
        },
    };
}

export default function Invoice({ products }) {
    const snackbar = useSnackbar();
    const router = useRouter();
    const { user } = useAuth();
    return (
        <Dashboard title="Invoice">
            <AutoForm
                boxSize={"sm"}
                defaultValues={{ items: [{ value: "" }] }}
                submitLabel="Add Sale"
                schema={{
                    items: {
                        type: "array",
                        min: 1,
                        items: {
                            type: "object",
                            properties: {
                                product: {
                                    label: "New Item",
                                    type: "select",
                                    options: products,
                                },
                            },
                        },
                    },
                }}
                onSubmit={(values) => {
                    values.items.forEach(async (product) => {
                        await supabaseClient.from("sales").insert({
                            paid: true,
                            count: 1,
                            product: parseInt(product.value),
                            owner: user?.id,
                        });
                    });

                    snackbar({
                        description: "Payment Added",
                        status: "success",
                    });

                    router.push("/dashboard/" + user?.id);
                }}
            />
        </Dashboard>
    );
}
