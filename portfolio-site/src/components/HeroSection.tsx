import React from "react";
import { Wrap, WrapItem, Avatar, Text, HStack } from "@chakra-ui/react";
import AvatarLogo from "../assets/Avatar Transparent.png";

const HeroSection = () => {
  return (
    <HStack justifyContent="center">
      <Text>Hello, I'm David Perez</Text>
      <Avatar size="2xl" bg="green" name="David Perez" src={AvatarLogo} />
    </HStack>
    // <Wrap>
    //   <WrapItem>
    //     <Text>Hello, I'm David Perez</Text>
    //   </WrapItem>
    //   <WrapItem>
    //     <Avatar size="2xl" bg="green" name="David Perez" src={AvatarLogo} />
    //   </WrapItem>
    // </Wrap>
  );
};

export default HeroSection;
