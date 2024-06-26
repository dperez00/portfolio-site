import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo Transparent.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="70px" />
      <HStack spacing="20px">
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Home
          </Link>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            About
          </Link>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Experience
          </Link>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Projects
          </Link>
        </Box>
        <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={{ fontSize: "24px" }}
          >
            Contact
          </Link>
        </Box>
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
