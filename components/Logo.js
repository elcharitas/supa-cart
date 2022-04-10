import { Image, Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <>
            <Image src="./logo.png" w="8" />
            <Text fontWeight="extrabold" textDecor="none">
                SupaCart
            </Text>
        </>
    );
}
