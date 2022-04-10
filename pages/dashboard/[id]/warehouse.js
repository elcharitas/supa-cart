import { AutoForm, useAuth, useSnackbar } from "@saas-ui/react";
import { useRouter } from "next/router";

import Dashboard from "../../../components/Dashboard";
import { supabaseClient } from "../../../utils/supabase";

export default function Warehouse() {
    const schema = {
        name: {
            label: "Product",
            rules: {
                required: true,
            },
        },
        price: {
            label: "Price ($)",
            rules: {
                required: true,
            },
            type: "number",
        },
        description: {
            type: "textarea",
            label: "Description",
            rules: {
                required: true,
            },
        },
    };

    const { user } = useAuth();
    const snackbar = useSnackbar();
    const router = useRouter();

    return (
        <Dashboard title="Add Products">
            <AutoForm
                defaultValues={{
                    name: "",
                    price: 1,
                    description: "",
                }}
                boxSize="sm"
                onSubmit={async (values) =>
                    await supabaseClient
                        .from("products")
                        .insert({ ...values, owner: user?.id })
                        .then(() => {
                            snackbar({
                                description: "Product Added",
                                status: "success",
                            });

                            router.push("/dashboard/" + user?.id);
                        })
                }
                submitLabel="Add Product"
                schema={schema}
            />
        </Dashboard>
    );
}
