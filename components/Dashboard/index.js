import {
    Box,
    Center,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Spinner,
    useDisclosure,
} from "@chakra-ui/react";
import { useAuth, useSnackbar } from "@saas-ui/react";
import { useRouter } from "next/router";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Dashboard({ title = "Home", children }) {
    const sidebar = useDisclosure();
    const { user } = useAuth();
    const router = useRouter();
    const snackbar = useSnackbar();

    return user ? (
        <>
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="top"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar w="full" h="50%" />
                </DrawerContent>
            </Drawer>
            <Box as="main">
                <Header title={title} sidebar={sidebar} />
                <Sidebar display={{ base: "none", md: "unset" }} />
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box as="main" p="4">
                        {children}
                    </Box>
                </Box>
            </Box>
        </>
    ) : (
        <Center h="100vh">
            <Spinner
                onPointerMove={() =>
                    snackbar({
                        description: "Please login to access dashboard!",
                        status: "error",
                        onCloseComplete() {
                            router.push("/");
                        },
                    })
                }
            />
        </Center>
    );
}
