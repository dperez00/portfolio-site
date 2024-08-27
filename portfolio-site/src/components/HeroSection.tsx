import { Image } from "@chakra-ui/react";
import Avatar from "../assets/Avatar.png";

const HeroSection = () => {
  return (
    <Image
      src={Avatar}
      boxSize={{ base: "150px", md: "250px", lg: "350px" }}
      objectFit="cover"
    />
  );
};

export default HeroSection;
