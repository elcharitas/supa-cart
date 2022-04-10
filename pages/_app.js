import Link from "next/link";
import { SaasProvider, AuthProvider, ModalsProvider } from "@saas-ui/react";

import { theme } from "../utils/theme";
import { supabaseService } from "../utils/supabase";

// Saas UI components will use the Next Link Wrapper.
const NextLink = (props) => <Link passHref {...props} />;

function MyApp({ Component, pageProps }) {
    return (
        <SaasProvider theme={theme} linkComponent={NextLink}>
            <AuthProvider {...supabaseService}>
                <ModalsProvider>
                    <Component {...pageProps} />
                </ModalsProvider>
            </AuthProvider>
        </SaasProvider>
    );
}

export default MyApp;
