import { Box, Heading, VStack } from "@chakra-ui/react";

const BottomRackClothing = () => {
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)">
        <VStack justifyContent="center">
          <Heading as="h1" size="4xl">
            Bottom Rack Clothing
          </Heading>
          <Heading as="h3" size="lg">
            Web Design & Development
          </Heading>
        </VStack>
      </Box>

      <Box mt="80px" display="flex" justifyContent="center" alignItems="center">
        <iframe
          src="https://www.loom.com/embed/10ee493c1fdb44b68b2a7ba9c12400f1?sid=3d14baad-6654-40a2-b842-790fbcc05e3f"
          width="560px"
          height="315px"
          allowFullScreen
        />
      </Box>
    </>
  );
};

export default BottomRackClothing;
