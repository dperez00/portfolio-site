import { Box, HStack, Heading, Text } from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <>
      <HStack justifyContent="center">
        <Text fontSize="18px">Get In Touch</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h2" fontSize="48px" color="#67d391" mb="32px">
          Contact Me
        </Heading>
      </HStack>
      <HStack justifyContent="center">
        <Box border="1px" borderColor="green" borderRadius="32px">
          <HStack gap="8px" margin="16px">
            <Text fontSize="large">Email</Text>
            <Text fontSize="large">LinkedIn</Text>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default ContactMe;
