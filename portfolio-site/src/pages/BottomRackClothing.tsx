import CosmosForgeImage from "../assets/cosmosforge.png";
import CosmosForgeAffiliateImage from "../assets/cosmosforgeaffiliate.png";
import BeaningfulCoffeeImage from "../assets/beaningfulcoffee.png";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Imported from Projects.tsx. Refactor this later on.
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

// images
// const CosmosForgePicture = new URL(
//   "../assets/cosmosforge.png",
//   import.meta.url
// );
// const CosmosForgeAffiliatePicture = new URL(
//   "../assets/cosmosforgeaffiliate.png",
//   import.meta.url
// );
// const BeaningfulCoffeePicture = new URL(
//   "../assets/beaningfulcoffee.png",
//   import.meta.url
// );

const projects: Project[] = [
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
    image: CosmosForgeImage,
    link: "/CosmosForge",
  },
  {
    title: "Cosmos Forge Affiliate",
    description: "Theme Customization",
    image: CosmosForgeAffiliateImage,
    link: "/CosmosForgeAffiliate",
  },
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: BeaningfulCoffeeImage,
    link: "/BeaningfulCoffee",
  },
];

const BottomRackClothing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)" p={{ base: 4, md: 8 }}>
        <VStack justifyContent="center" spacing={{ base: 4, md: 8 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} textAlign="center">
            Bottom Rack Clothing
          </Heading>
          <Heading as="h3" size={{ base: "md", md: "lg" }} textAlign="center">
            Web Design & Development
          </Heading>
        </VStack>
      </Box>

      <Box
        mt={{ base: "40px", md: "80px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, md: 8 }}
      >
        <iframe
          src="https://www.loom.com/embed/10ee493c1fdb44b68b2a7ba9c12400f1?sid=3d14baad-6654-40a2-b842-790fbcc05e3f"
          width="100%"
          height="auto"
          style={{ maxWidth: "900px", minHeight: "400px" }}
          allowFullScreen
        />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, md: 8 }}
      >
        <VStack align="start" maxWidth="800px" spacing={{ base: 4, md: 8 }}>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            Who
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            Bottom Rack Clothing is a clothing/accessories brand. It holds a
            large collection of clothes and accessories with a wide range of
            variants.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
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
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
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
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            With limitless customization possibilities, Bottom Rack Clothing has
            been built with the ability to scale in the long-term and help
            streamline many difficult tasks. I built this website with emphasis
            on customer visual experience and ease of use.
          </Text>
        </VStack>
      </Box>

      <Heading
        as="h4"
        fontSize={{ base: "xl", md: "2xl" }}
        mt={{ base: "40px", md: "80px" }}
        fontWeight="bold"
        textAlign="center"
        color="green.300"
      >
        My Projects
      </Heading>
      <Heading
        as="h3"
        fontSize={{ base: "2xl", md: "4xl" }}
        mt="10px"
        mb="20px"
        fontWeight="bold"
        textAlign="center"
      >
        Recent Work
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
        p={{ base: 5, md: 10 }}
      >
        {projects.map((project, index) => (
          <Box
            borderRadius="6px"
            key={index}
            m={4}
            overflow="hidden"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
          >
            <Card borderRadius={10}>
              <Image
                src={project.image}
                alt={project.title}
                width={{ base: "100%", md: "400px" }}
                height={{ base: "auto", md: "300px" }}
                objectFit="fill"
              />
              <CardBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  as="h3"
                  fontSize={{
                    base: "18px",
                    sm: "20px",
                    md: "22px",
                    lg: "24px",
                  }}
                  textAlign="center"
                  mb={{ base: 2, md: 4 }}
                >
                  {project.title}
                </Heading>
                <Text
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "18px",
                  }}
                  textAlign="center"
                >
                  {project.description}
                </Text>
              </CardBody>
              <Button
                alignSelf="center"
                m={4}
                borderRadius="6px"
                width={{ base: "50%", md: "45%", lg: "45%" }}
                bgGradient="linear(to-l, #7928CA, green.300)"
                onClick={() => navigate(project.link)}
              >
                View Project
              </Button>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BottomRackClothing;
