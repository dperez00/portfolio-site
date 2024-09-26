import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const BottomLinks = () => {
  return (
    <>
      <HStack justifyContent="center">
        <List
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Box
            _hover={{ cursor: "pointer", color: "#67d391" }}
            mb={{ base: 4, md: 0 }}
          >
            <ListItem mr={{ base: 0, md: 10 }}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                About
              </ScrollLink>
            </ListItem>
          </Box>
          <Box
            _hover={{ cursor: "pointer", color: "#67d391" }}
            mb={{ base: 4, md: 0 }}
          >
            <ListItem mr={{ base: 0, md: 10 }}>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                Experience
              </ScrollLink>
            </ListItem>
          </Box>
          <Box
            _hover={{ cursor: "pointer", color: "#67d391" }}
            mb={{ base: 4, md: 0 }}
          >
            <ListItem mr={{ base: 0, md: 10 }}>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                Projects
              </ScrollLink>
            </ListItem>
          </Box>
        </List>
      </HStack>
      <HStack justifyContent="center">
        <Text
          fontSize={{ base: "12px", md: "16px" }}
          mt={10}
          mb={8}
          textAlign="center"
        >
          Copyright © 2024 David Perez. All Rights Reserved
        </Text>
      </HStack>
    </>
  );
};

export default BottomLinks;
