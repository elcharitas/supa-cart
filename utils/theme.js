import { extendTheme } from "@chakra-ui/react";
import { baseTheme } from "@saas-ui/react";
import "@fontsource/montserrat";
import "@fontsource/poppins";

export const theme = extendTheme(
    {
        fonts: {
            body: "Poppins",
            heading: "Montserrat",
        },
        config: {
            cssVarPrefix: "ck",
        },
    },
    baseTheme
);
