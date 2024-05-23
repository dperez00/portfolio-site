import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

// write a function that maps Projects into cards.
interface Project {
  title: string;
  description: string;
  image: string;
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
  },
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
    image: CosmosForge.toString(),
  },
  {
    title: "Cosmos Forge Affiliate",
    description: "Theme Customization",
    image: CosmosForgeAffiliate.toString(),
  },
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: BeaningfulCoffee.toString(),
  },
];

const Projects = () => {
  return (
    <>
      <HStack justifyContent="center">
        <Text>Explore My Recent</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h2" fontSize="48px" color="#67d391" mb="32px">
          Projects
        </Heading>
      </HStack>
      <HStack justifyContent="center">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardBody>
              <Image
                src={project.image}
                alt={project.title}
                boxSize="300px"
                objectFit="fill"
              />
              <Heading as="h3" fontSize="24px">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </CardBody>
            <Button backgroundColor="#67d391">View Project</Button>
          </Card>
        ))}
      </HStack>
    </>
  );
};

export default Projects;
