import { HStack, Show } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import HeroSectionText from "./HeroSectionText";

const Banner = () => {
  return (
    <>
      <HStack justifyContent="center" spacing="115px" mt="50px">
        <HeroSectionText />
        <Show above="lg">
          <HeroSection />
        </Show>
      </HStack>
    </>
  );
};

export default Banner;
