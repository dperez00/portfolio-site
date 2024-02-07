import { Avatar, Text, HStack } from "@chakra-ui/react";
import AvatarLogo from "../assets/Avatar Transparent.png";

const HeroSection = () => {
  return (
    <HStack justifyContent="center">
      <Text>Hello, I'm David Perez</Text>
      <Avatar size="2xl" bg="green.500" name="David Perez" src={AvatarLogo} />
    </HStack>
  );
};

export default HeroSection;
