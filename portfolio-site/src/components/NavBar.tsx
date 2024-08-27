import {
  Box,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/Logo Transparent.png";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Image src={logo} boxSize="70px" />
        <HStack spacing="20px" display={{ base: "none", md: "flex" }}>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <RouterLink to="/" style={{ fontSize: "24px" }}>
              Home
            </RouterLink>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ScrollLink
              to="about"
              smooth="easeInOutQuart"
              duration={900}
              style={{ fontSize: "24px" }}
            >
              About
            </ScrollLink>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ScrollLink
              to="experience"
              smooth="easeInOutQuart"
              duration={900}
              style={{ fontSize: "24px" }}
            >
              Experience
            </ScrollLink>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ScrollLink
              to="projects"
              smooth="easeInOutQuart"
              duration={900}
              style={{ fontSize: "24px" }}
            >
              Projects
            </ScrollLink>
          </Box>
          <Box _hover={{ cursor: "pointer", color: "#67d391" }}>
            <ScrollLink
              to="contact"
              smooth="easeInOutQuart"
              duration={900}
              style={{ fontSize: "24px" }}
            >
              Contact Me
            </ScrollLink>
          </Box>
        </HStack>
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box
              _hover={{ cursor: "pointer", color: "#67d391" }}
              mb={4}
              onClick={onClose}
            >
              <RouterLink to="/" style={{ fontSize: "24px" }}>
                Home
              </RouterLink>
            </Box>
            <Box
              _hover={{ cursor: "pointer", color: "#67d391" }}
              mb={4}
              onClick={onClose}
            >
              <ScrollLink
                to="about"
                smooth="easeInOutQuart"
                duration={900}
                style={{ fontSize: "24px" }}
              >
                About
              </ScrollLink>
            </Box>
            <Box
              _hover={{ cursor: "pointer", color: "#67d391" }}
              mb={4}
              onClick={onClose}
            >
              <ScrollLink
                to="experience"
                smooth="easeInOutQuart"
                duration={900}
                style={{ fontSize: "24px" }}
              >
                Experience
              </ScrollLink>
            </Box>
            <Box
              _hover={{ cursor: "pointer", color: "#67d391" }}
              mb={4}
              onClick={onClose}
            >
              <ScrollLink
                to="projects"
                smooth="easeInOutQuart"
                duration={900}
                style={{ fontSize: "24px" }}
              >
                Projects
              </ScrollLink>
            </Box>
            <Box
              _hover={{ cursor: "pointer", color: "#67d391" }}
              mb={4}
              onClick={onClose}
            >
              <ScrollLink
                to="contact"
                smooth="easeInOutQuart"
                duration={900}
                style={{ fontSize: "24px" }}
              >
                Contact Me
              </ScrollLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
