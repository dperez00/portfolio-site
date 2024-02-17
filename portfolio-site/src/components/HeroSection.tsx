import { HStack, Image } from "@chakra-ui/react";
import Avatar from "../assets/Avatar.png";

const HeroSection = () => {
  return <Image src={Avatar} boxSize="350px" objectFit="cover" />;
};

export default HeroSection;

{
  /* <Show above="lg">
  <HeroSection />
</Show>; */
}
