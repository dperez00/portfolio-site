import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// write a function that maps Projects into cards.
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const BRC = new URL("../assets/bottomrackclothing.png", import.meta.url);
const CosmosForge = new URL("../assets/cosmosforge.png", import.meta.url);
const CosmosForgeAffiliate = new URL(
  "../assets/cosmosforgeaffiliate.png",
  import.meta.url
);
const BeaningfulCoffee = new URL(
  "../assets/beaningfulcoffee.png",
  import.meta.url
);
const Magtech = new URL("../assets/magtech.png", import.meta.url);
const GameHub = new URL("../assets/gamehub.png", import.meta.url);

const projects: Project[] = [
  {
    title: "Bottom Rack Clothing",
    description: "Web Design & Development",
    image: BRC.toString(),
    link: "/BottomRackClothing",
  },
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
    image: CosmosForge.toString(),
    link: "/CosmosForge",
  },
  {
    title: "Cosmos Forge Affiliate",
    description: "Theme Customization",
    image: CosmosForgeAffiliate.toString(),
    link: "/CosmosForgeAffiliate",
  },
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: BeaningfulCoffee.toString(),
    link: "/BeaningfulCoffee",
  },
  {
    title: "Magtech Development",
    description: "Web Design & Development",
    image: Magtech.toString(),
    link: "/Magtech",
  },
  {
    title: "GameHub",
    description: "Web Design & Development",
    image: GameHub.toString(),
    link: "/GameHub",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack justifyContent="center">
        <Text fontSize={{ base: "16px", md: "18px" }}>Explore My Recent</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading
          as="h2"
          fontSize={{ base: "32px", md: "48px" }}
          color="#67d391"
          mb="32px"
        >
          Projects
        </Heading>
      </HStack>
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
                  mb={{ base: 4, md: 6 }}
                >
                  {project.description}
                </Text>
              </CardBody>
              <Button
                alignSelf="center"
                m={4}
                borderRadius="6px"
                width={{ base: "80%", md: "60%" }}
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

export default Projects;
