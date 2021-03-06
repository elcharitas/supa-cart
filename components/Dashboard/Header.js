import {
    Avatar,
    Button,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "@saas-ui/react";
import { FiMenu } from "react-icons/fi";
import Head from "next/head";

export default function Header({ sidebar, title }) {
    const { user, logOut } = useAuth();
    const color = useColorModeValue("white", "gray.800");
    return (
        <>
            <Head>
                <title>{title + " | Dashboard"}</title>
            </Head>
            <Flex
                as="header"
                align="center"
                justify={{ base: "space-between", sm: "end" }}
                w="full"
                px="4"
                bg={color}
                borderBottomWidth="1px"
                borderColor={"inherit"}
                h="14"
            >
                <IconButton
                    aria-label="Menu"
                    display={{ base: "inline-flex", md: "none" }}
                    onClick={sidebar.onOpen}
                    icon={<FiMenu />}
                    size="sm"
                />

                <Flex align="center">
                    <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                        <Button
                            colorScheme="green"
                            variant="outline"
                            size="sm"
                            fontSize="small"
                            onClick={logOut}
                        >
                            Sign Out
                        </Button>
                    </HStack>
                    <Avatar
                        as="a"
                        ml="4"
                        size="sm"
                        name={user?.email}
                        href="dashboard/settings"
                        cursor="pointer"
                    />
                </Flex>
            </Flex>
        </>
    );
}
