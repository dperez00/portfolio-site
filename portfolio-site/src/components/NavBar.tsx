import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo Transparent.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="70px" />
      <HStack spacing="20px">
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <RouterLink to="/" style={{ fontSize: "24px" }}>
            Home
          </RouterLink>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            About
          </ScrollLink>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Experience
          </ScrollLink>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Projects
          </ScrollLink>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Contact
          </ScrollLink>
        </Box>
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
