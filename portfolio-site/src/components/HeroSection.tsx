import { Avatar, Text, HStack, Heading, VStack, Box } from "@chakra-ui/react";
import AvatarLogo from "../assets/Avatar Transparent.png";

const HeroSection = () => {
  return (
    <HStack justifyContent="center">
      <VStack>
        <Heading as="h1" size="4xl" color="green.300" padding="35px" mb="-50px">
          David Perez
        </Heading>
        <Text fontSize="5xl">
          I'm a{" "}
          <Box as="span" color="green.300">
            Developer
          </Box>
        </Text>
      </VStack>
      <Avatar size="3xl" bg="green.300" name="David Perez" src={AvatarLogo} />
    </HStack>
  );
};

export default HeroSection;
