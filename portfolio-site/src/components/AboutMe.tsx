import { HStack, Heading } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <HStack justifyContent="center" mt="50px" bgColor="#67d391">
      <Heading as="h2" size="2xl" mb="4">
        About Me
      </Heading>
    </HStack>
  );
};

export default AboutMe;
