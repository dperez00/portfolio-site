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

const projects: Project[] = [
  {
    title: "Bottom Rack Clothing",
    description: "Web Design & Development",
    image: "/assets/bottomrackclothing.PNG",
    link: "/BottomRackClothing",
  },
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
    image: "/assets/cosmosforge.png",
    link: "/CosmosForge",
  },
  {
    title: "Cosmos Forge Affiliate",
    description: "Theme Customization",
    image: "/assets/cosmosforgeaffiliate.png",
    link: "/CosmosForgeAffiliate",
  },
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: "/assets/beaningfulcoffee.png",
    link: "/BeaningfulCoffee",
  },
  {
    title: "Magtech Development",
    description: "Web Design & Development",
    image: "/assets/magtech.png",
    link: "/Magtech",
  },
  {
    title: "GameHub",
    description: "Web Design & Development",
    image: "/assets/gamehub.png",
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

export default Projects;
