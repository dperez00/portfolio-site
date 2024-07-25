import { Box, Heading, Text, VStack } from "@chakra-ui/react";

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
          width="900px"
          height="600px"
          allowFullScreen
        />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <VStack align="start" maxWidth="800px">
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            Who
          </Text>
          <Text as="p" fontSize="18px">
            Bottom Rack Clothing is a clothing/accessories brand. It holds a
            large collection of clothes and accessories with a wide range of
            variants.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            Scaling a clothing brand with a large inventory of clothes and
            accessories can be very difficult with a brand of this size. With
            such a large inventory, it is important to stay organized. Staying
            organized is crucial when it comes to any business and future
            scaling.
            <br />
            <br />
            With large inventories, you want fast and easy to find search
            options for the best customer experience. When customers can't find
            what they are looking for, you run the risk of losing potential
            customers and growth.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize="18px">
            Using a dynamic premium theme, I was able to implement a filter and
            search feature, making it easier for customers to find what they
            want quickly. Not only does this help with a stress-free shopping
            experience, but it also helps with conversions.
            <br />
            <br />I also implemented a "Shop the look" feature. This benefits
            the business by quickly advertising possible combined products. It
            shows a selection of a few items that are often bought together and
            allows for quick navigation to the product. the image depicts these
            products as separate parts of one "look". This feature encourages
            the customer to purchase multiple products at once.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize="18px">
            With limitless customization possibilities, Bottom Rack Clothing has
            been built with the ability to scale in the long-term and help
            streamline many difficult tasks. I built this website with emphasis
            on customer visual experience and ease of use
          </Text>
        </VStack>
      </Box>

      <Heading
        as="h4"
        fontSize="25px"
        mt="80px"
        fontWeight="bold"
        textAlign="center"
        color="green.300"
      >
        My Projects
      </Heading>
      <Heading
        as="h3"
        fontSize="40px"
        mt="10px"
        mb="20px"
        fontWeight="bold"
        textAlign="center"
      >
        Recent Work
      </Heading>
    </>
  );
};

export default BottomRackClothing;
