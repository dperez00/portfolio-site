import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo Transparent.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;