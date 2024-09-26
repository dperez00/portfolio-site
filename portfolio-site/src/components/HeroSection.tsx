import { Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Image
      src="/assets/Avatar.png"
      boxSize={{ base: "150px", md: "250px", lg: "350px" }}
      objectFit="cover"
    />
  );
};

export default HeroSection;
