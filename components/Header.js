import React from "react";
import {
    chakra,
    HStack,
    Flex,
    IconButton,
    useColorModeValue,
    useDisclosure,
    Button,
    useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaMoon, FaSun, FaTwitter } from "react-icons/fa";

import Logo from "./Logo";

export default function Header() {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const bgColor = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.800", "white");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header w="full" shadow={"md"} bg={bgColor}>
                <chakra.div h="3.5rem" mx="auto">
                    <Flex
                        w="full"
                        h="full"
                        px="6"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Flex align="flex-start">
                            <HStack
                                spacing="5"
                                display={{ base: "none", md: "flex" }}
                            >
                                <Flex alignItems="center" as={Link} href="/">
                                    <Logo />
                                </Flex>
                                <Link href="/guide">Guide</Link>
                                <Link href="/pricing">Pricing</Link>
                            </HStack>
                        </Flex>
                        <Flex
                            justify="flex-end"
                            align="center"
                            color="gray.400"
                        >
                            <IconButton
                                size="md"
                                fontSize="lg"
                                variant="ghost"
                                color="black"
                                onClick={toggleColorMode}
                                icon={<SwitchIcon />}
                            />
                            <IconButton
                                as={"a"}
                                href="https://github.com/elcharitas"
                                size="md"
                                fontSize="lg"
                                variant="ghost"
                                color="black"
                                icon={<FaGithub size="20px" />}
                            />
                            <IconButton
                                as={"a"}
                                href="https://twitter.com/iamelcharitas"
                                size="md"
                                fontSize="lg"
                                variant="ghost"
                                color="black"
                                icon={<FaTwitter size="20px" />}
                            />
                            <HStack
                                spacing="5"
                                display={{ base: "none", md: "flex" }}
                                mx="5"
                            >
                                <Button
                                    as={"a"}
                                    href="/signup"
                                    colorScheme="green"
                                    variant="solid"
                                    size="sm"
                                >
                                    Sign up
                                </Button>
                                <Button
                                    as={"a"}
                                    href="/signin"
                                    colorScheme="green"
                                    variant="ghost"
                                    size="sm"
                                >
                                    Sign in
                                </Button>
                            </HStack>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                        </Flex>
                    </Flex>
                </chakra.div>
            </chakra.header>
        </React.Fragment>
    );
}
