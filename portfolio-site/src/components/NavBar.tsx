import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo Transparent.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="70px" />
      <HStack spacing="20px">
        <Link to="/" style={{ fontSize: "24px" }}>
          Home
        </Link>
        <Link to="/about" style={{ fontSize: "24px" }}>
          About
        </Link>
        <Link to="/projects" style={{ fontSize: "24px" }}>
          Projects
        </Link>
        <Link to="/contact" style={{ fontSize: "24px" }}>
          Contact
        </Link>
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
