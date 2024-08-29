import { Box, HStack, VStack, useBreakpointValue } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import HeroSectionText from "./HeroSectionText";

const Banner = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      {isLargeScreen ? (
        <HStack
          justifyContent="center"
          spacing={{ base: "20px", md: "30px", lg: "50px" }}
          mt={{ base: "20px", md: "30px", lg: "50px" }}
        >
          <Box>
            <HeroSectionText />
          </Box>
          <Box>
            <HeroSection />
          </Box>
        </HStack>
      ) : (
        <VStack
          spacing={{ base: "20px", md: "30px" }}
          mt={{ base: "20px", md: "30px" }}
        >
          <Box>
            <HeroSection />
          </Box>
          <Box>
            <HeroSectionText />
          </Box>
        </VStack>
      )}
    </>
  );
};

export default Banner;
