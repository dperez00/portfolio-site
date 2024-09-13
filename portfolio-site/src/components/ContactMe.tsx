import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <>
      <HStack justifyContent="center">
        <Text fontSize={{ base: "16px", md: "18px" }}>Get In Touch</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading
          as="h2"
          fontSize={{ base: "32px", md: "48px" }}
          color="#67d391"
          mb={{ base: "16px", md: "32px" }}
        >
          Contact Me
        </Heading>
      </HStack>
      <HStack justifyContent="center" mb={{ base: "50px", md: "150px" }}>
        <Box
          border="2px"
          borderColor="#7928CA"
          borderRadius="32px"
          p={{ base: "8px", md: "16px" }}
        >
          <HStack
            gap={{ base: "8px", md: "16px" }}
            margin={{ base: "8px", md: "16px" }}
            wrap="wrap"
          >
            <HStack>
              <Box
                borderRadius="full"
                bgGradient="linear(to-l, #7928CA, green.300)"
                p={{ base: "4px", md: "8px" }}
              >
                <MdOutlineMailOutline />
              </Box>
              <Text fontSize={{ base: "14px", md: "large" }}>
                perez.david3001@gmail.com
              </Text>
            </HStack>
            <HStack>
              <Link
                to="https://www.linkedin.com/in/davidperez00/"
                target="_blank"
              >
                <Box
                  borderRadius="full"
                  bgGradient="linear(to-l, #7928CA, green.300)"
                  p={{ base: "4px", md: "8px" }}
                >
                  <FaLinkedin />
                </Box>
              </Link>
              <Text fontSize={{ base: "14px", md: "large" }}>LinkedIn</Text>
            </HStack>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default ContactMe;
