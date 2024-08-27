import { HStack, VStack, Show, useBreakpointValue } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import HeroSectionText from "./HeroSectionText";

const Banner = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      {isLargeScreen ? (
        <HStack
          justifyContent="center"
          spacing={{ base: "20px", md: "50px", lg: "115px" }}
          mt={{ base: "20px", md: "30px", lg: "50px" }}
        >
          <HeroSectionText />
          <Show above="lg">
            <HeroSection />
          </Show>
        </HStack>
      ) : (
        <VStack
          spacing={{ base: "20px", md: "30px" }}
          mt={{ base: "20px", md: "30px" }}
        >
          <HeroSectionText />
          <HeroSection />
        </VStack>
      )}
    </>
  );
};

export default Banner;
