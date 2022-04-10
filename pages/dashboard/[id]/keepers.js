import { AutoForm, useAuth, useSnackbar } from "@saas-ui/react";
import { useRouter } from "next/router";

import Dashboard from "../../../components/Dashboard";
import { supabaseClient } from "../../../utils/supabase";

export default function Warehouse() {
    const schema = {
        name: {
            label: "Fullname",
            rules: {
                required: true,
            },
        },
        email: {
            label: "Email Address",
            rules: {
                required: true,
            },
            type: "email",
        },
        pin: {
            type: "number",
            label: "Pin for login",
            rules: {
                required: true,
            },
        },
    };

    const { user } = useAuth();
    const snackbar = useSnackbar();
    const router = useRouter();

    return (
        <Dashboard title="New Shop Keepers">
            <AutoForm
                defaultValues={{
                    name: "",
                    email: "",
                    pin: "",
                }}
                boxSize="sm"
                onSubmit={async (values) =>
                    await supabaseClient
                        .from("keepers")
                        .insert({ ...values, owner: user?.id })
                        .then(() => {
                            snackbar({
                                description: "Shop Keeper Added",
                                status: "success",
                            });

                            router.push("/dashboard/" + user?.id);
                        })
                }
                submitLabel="Create Shop Keeper"
                schema={schema}
            />
        </Dashboard>
    );
}
