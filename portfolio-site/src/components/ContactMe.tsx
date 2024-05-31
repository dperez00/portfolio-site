import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

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
        <Box border="2px" borderColor="#7928CA" borderRadius="32px">
          <HStack gap="16px" margin="16px">
            <HStack>
              <Box
                borderRadius="full"
                bgGradient="linear(to-l, #7928CA, green.300)"
                p={1}
              >
                <MdOutlineMailOutline />
              </Box>
              <Text fontSize="large">perez.david3001@gmail.com</Text>
            </HStack>
            <HStack>
              <Box
                borderRadius="full"
                bgGradient="linear(to-l, #7928CA, green.300)"
                p={1}
              >
                <FaLinkedin />
              </Box>
              <Text fontSize="large">LinkedIn</Text>
            </HStack>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default ContactMe;
