import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

const BottomLinks = () => {
  return (
    <>
      <HStack justifyContent="center">
        <List display="flex" flexDirection="row">
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ListItem mr={10}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                About
              </Link>
            </ListItem>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ListItem mr={10}>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                Experience
              </Link>
            </ListItem>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ListItem mr={10} fontSize="20px">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                Projects
              </Link>
            </ListItem>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ListItem>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                style={{ fontSize: "24px" }}
              >
                Contact
              </Link>
            </ListItem>
          </Box>
        </List>
      </HStack>
      <HStack justifyContent="center">
        <Text fontSize="16px" mt={10} mb={8}>
          Copyright © 2024 David Perez. All Rights Reserved
        </Text>
      </HStack>
    </>
  );
};

export default BottomLinks;
