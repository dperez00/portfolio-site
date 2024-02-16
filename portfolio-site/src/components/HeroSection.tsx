import { HStack, Image } from "@chakra-ui/react";
import Avatar from "../assets/Avatar.png";

const HeroSection = () => {
  return (
    <HStack justifyContent="center">
      <Image src={Avatar} />
    </HStack>
  );
};

export default HeroSection;
