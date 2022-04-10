import { chakra, Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { useAuth } from "@saas-ui/react";

import Header from "../components/Header";

export default function Home() {
    const { user } = useAuth();
    return (
        <>
            <Header />
            <Flex
                w="full"
                h="100vh"
                justify="center"
                alignItems="center"
                bg={useColorModeValue("whiteAlpha.400", "gray.900")}
            >
                <Box
                    w={{ base: "full", md: "75%", lg: "50%" }}
                    px={4}
                    py={20}
                    mb="32"
                    textAlign={{ base: "left", md: "center" }}
                >
                    <chakra.span
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                        color={useColorModeValue("gray.900", "gray.100")}
                        mb={6}
                    >
                        <chakra.span display="block">
                            Fast Realtime &amp; Secure Inventory
                        </chakra.span>
                        <chakra.span
                            display="block"
                            color={useColorModeValue("green.600", "gray.500")}
                        >
                            Track, Invoice, Manage
                        </chakra.span>
                    </chakra.span>
                    <Box display="inline-flex" rounded="md" shadow="md">
                        <Button
                            w="full"
                            as="a"
                            href={user?.id ? "/dashboard/" + user?.id : "#"}
                            alignItems="center"
                            justifyContent="center"
                            px={12}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="full"
                            colorScheme="green"
                        >
                            Get started
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
