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
import { Auth, useModals } from "@saas-ui/react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaGoogle, FaMoon, FaSun, FaTwitter } from "react-icons/fa";

import Logo from "./Logo";

export default function Header() {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const bgColor = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    const modal = useModals();

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
                        <Flex align="flex-start" alignItems="center">
                            <Flex as={Link} href="/">
                                <Logo />
                            </Flex>
                            <HStack
                                mx="5"
                                spacing="5"
                                display={{ base: "none", md: "flex" }}
                            >
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
                                color={useColorModeValue("black", "white")}
                                onClick={toggleColorMode}
                                icon={<SwitchIcon />}
                            />
                            <IconButton
                                as={"a"}
                                href="https://github.com/elcharitas"
                                size="md"
                                fontSize="lg"
                                variant="ghost"
                                color={useColorModeValue("black", "white")}
                                icon={<FaGithub size="20px" />}
                            />
                            <IconButton
                                as={"a"}
                                href="https://twitter.com/iamelcharitas"
                                size="md"
                                fontSize="lg"
                                variant="ghost"
                                color={useColorModeValue("black", "white")}
                                icon={<FaTwitter size="20px" />}
                            />
                            <HStack
                                spacing="5"
                                display={{ base: "none", md: "flex" }}
                                mx="5"
                            >
                                <Button
                                    colorScheme="green"
                                    variant="solid"
                                    size="sm"
                                    onClick={() => {
                                        modal.open({
                                            body: (
                                                <Auth
                                                    title=""
                                                    view="signup"
                                                    providers={{
                                                        github: {
                                                            icon: FaGithub,
                                                            name: "Github",
                                                        },
                                                        google: {
                                                            icon: FaGoogle,
                                                            name: "Google",
                                                        },
                                                    }}
                                                />
                                            ),
                                        });
                                    }}
                                >
                                    Sign up
                                </Button>
                                <Button
                                    colorScheme="green"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        modal.open({
                                            body: (
                                                <Auth
                                                    title=""
                                                    providers={{
                                                        github: {
                                                            icon: FaGithub,
                                                            name: "Github",
                                                        },
                                                        google: {
                                                            icon: FaGoogle,
                                                            name: "Google",
                                                        },
                                                    }}
                                                />
                                            ),
                                        });
                                    }}
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
