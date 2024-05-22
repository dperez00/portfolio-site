import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

// write a function that maps Projects into cards.
interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Bottom Rack Clothing",
    description: "Web Design & Development",
  },
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
  },
  {
    title: "Cosmos Forge Affiliate",
    description: "Theme Customization",
  },
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
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
            <CardHeader>{project.title}</CardHeader>
            <CardBody>
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
