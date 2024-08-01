import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
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
const CosmosForgePicture = new URL(
  "../assets/cosmosforge.png",
  import.meta.url
);
const CosmosForgeAffiliatePicture = new URL(
  "../assets/cosmosforgeaffiliate.png",
  import.meta.url
);
const BeaningfulCoffeePicture = new URL(
  "../assets/beaningfulcoffee.png",
  import.meta.url
);

const projects: Project[] = [
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
    image: CosmosForgePicture.toString(),
    link: "/CosmosForge",
  },
  {
    title: "Cosmos Forge Affiliate",
    description: "Theme Customization",
    image: CosmosForgeAffiliatePicture.toString(),
    link: "/CosmosForgeAffiliate",
  },
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: BeaningfulCoffeePicture.toString(),
    link: "/BeaningfulCoffee",
  },
];

const CosmosForgeAffiliate = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)">
        <VStack justifyContent="center">
          <Heading as="h1" size="4xl">
            Cosmos Forge Affiliate
          </Heading>
          <Heading as="h3" size="lg">
            Theme Customization
          </Heading>
        </VStack>
      </Box>

      <Box mt="80px" display="flex" justifyContent="center" alignItems="center">
        <iframe
          src="https://www.loom.com/embed/01cb2500e0ef4ab8a622d44869302b34?sid=ae1c595a-f483-44fd-88c9-abdeed09b9f1"
          width="900px"
          height="600px"
          allowFullScreen
        />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <VStack align="start" maxWidth="800px">
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            Cosmos Forge is doing affiliate marketing with a brand selling LED
            light strips. However, the default Shopify theme does not allow for
            an affiliate product page without the store selling the product
            themselves.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize="18px">
            Using Shopify Liquid and custom front-end coding, I was able to
            create a product page for their affiliate products.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize="18px">
            Customers can now shop Cosmos Forge's own products and affiliate
            products. Cosmos Forge can now increase their revenue by cross
            marketing affiliate products.
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

      <HStack justifyContent="center" mb="250px">
        {projects.map((project, index) => (
          <Card borderRadius="6px" key={index}>
            <CardBody>
              <Image
                src={project.image}
                alt={project.title}
                boxSize="300px"
                objectFit="fill"
                mb={5}
              />
              <Heading as="h3" fontSize="24px">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </CardBody>
            <Button
              m={4}
              borderRadius="6px"
              width="60%"
              bgGradient="linear(to-l, #7928CA, green.300)"
              onClick={() => navigate(project.link)}
            >
              View Project
            </Button>
          </Card>
        ))}
      </HStack>
    </>
  );
};

export default CosmosForgeAffiliate;
