import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

export default function NavItem({ icon = FaCheck, children }) {
    const color = useColorModeValue("gray.600", "gray.300");
    return (
        <Flex
            p="4"
            align="center"
            cursor="pointer"
            _hover={{
                bg: useColorModeValue("gray.100", "gray.900"),
                color,
            }}
        >
            <Icon mx="2" boxSize="4" _groupHover={{ color }} as={icon} />
            {children}
        </Flex>
    );
}
