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
const BeaningfulCoffeePicture = new URL(
  "../assets/beaningfulcoffee.png",
  import.meta.url
);
const MagtechImage = new URL("../assets/magtech.png", import.meta.url);
const GameHubImage = new URL("../assets/gamehub.png", import.meta.url);

const projects: Project[] = [
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: BeaningfulCoffeePicture.toString(),
    link: "/BeaningfulCoffee",
  },
  {
    title: "Magtech Development",
    description: "Web Design & Development",
    image: MagtechImage.toString(),
    link: "/Magtech",
  },
  {
    title: "GameHub",
    description: "Web Design & Development",
    image: GameHubImage.toString(),
    link: "/GameHub",
  },
];

const CosmosForgeAffiliate = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)" p={{ base: 4, md: 8 }}>
        <VStack justifyContent="center" spacing={{ base: 4, md: 8 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} textAlign="center">
            Cosmos Forge Affiliate
          </Heading>
          <Heading as="h3" size={{ base: "md", md: "lg" }} textAlign="center">
            Theme Customization
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
          src="https://www.loom.com/embed/01cb2500e0ef4ab8a622d44869302b34?sid=ae1c595a-f483-44fd-88c9-abdeed09b9f1"
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
            The Challenge
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            Cosmos Forge is doing affiliate marketing with a brand selling LED
            light strips. However, the default Shopify theme does not allow for
            an affiliate product page without the store selling the product
            themselves.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            Using Shopify Liquid and custom front-end coding, I was able to
            create a product page for their affiliate products.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            Customers can now shop Cosmos Forge's own products and affiliate
            products. Cosmos Forge can now increase their revenue by cross
            marketing affiliate products.
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

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2} p={10}>
        {projects.map((project, index) => (
          <Box
            borderRadius="6px"
            key={index}
            m={2}
            overflow="hidden"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
          >
            <Card>
              <CardBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={5}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={{ base: "100%", md: "300px", lg: "400px" }}
                  height={{ base: "auto", md: "200px", lg: "250px" }}
                  objectFit="fill"
                  mb={5}
                />
                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                  textAlign="center"
                >
                  {project.title}
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  textAlign="center"
                >
                  {project.description}
                </Text>
              </CardBody>
              <Button
                alignSelf="center"
                m={4}
                borderRadius="6px"
                width="60%"
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

export default CosmosForgeAffiliate;
