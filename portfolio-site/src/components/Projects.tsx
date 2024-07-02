import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
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
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <HStack justifyContent="center">
        <Text fontSize="18px">Explore My Recent</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h2" fontSize="48px" color="#67d391" mb="32px">
          Projects
        </Heading>
      </HStack>
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

export default Projects;
