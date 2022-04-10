import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";
import { MdAccountTree, MdHome, MdInventory, MdReceipt } from "react-icons/md";

import NavItem from "./NavItem";
import Logo from "../Logo";

export default function Sidebar({ id, ...props }) {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            w="60"
            h="full"
            overflow="hidden"
            bg={useColorModeValue("white", "gray.800")}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            {...props}
        >
            <Flex
                px="4"
                borderBottom="1px"
                borderColor="inherit"
                py="3"
                align="center"
            >
                <Logo />
            </Flex>
            <Flex fontSize="sm" color="gray.600" direction="column">
                <NavItem href={"/dashboard/" + id} icon={MdHome}>
                    Home
                </NavItem>
                <NavItem
                    href={"/dashboard/" + id + "/invoice"}
                    icon={MdReceipt}
                >
                    Invoice
                </NavItem>
                <NavItem
                    href={"/dashboard/" + id + "/warehouse"}
                    icon={MdInventory}
                >
                    Warehouse
                </NavItem>
                <NavItem
                    href={"/dashboard/" + id + "/keepers"}
                    icon={MdAccountTree}
                >
                    Shop Keepers
                </NavItem>
                <NavItem
                    href={"/dashboard/" + id + "/settings"}
                    icon={BsGearFill}
                >
                    Settings
                </NavItem>
            </Flex>
        </Box>
    );
}
