import { AspectRatio, Box, Heading, VStack } from "@chakra-ui/react";

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
      <AspectRatio maxW="560px" ratio={16 / 9}>
        <iframe
          title="Bottom Rack Clothing"
          src="https://www.loom.com/embed/10ee493c1fdb44b68b2a7ba9c12400f1?sid=5d3cef64-3486-4780-b0b2-da4cf73400cb"
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
};

export default BottomRackClothing;
