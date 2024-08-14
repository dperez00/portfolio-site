import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

// images
const MagtechImage = new URL("../assets/magtech.png", import.meta.url);
const GameHubImage = new URL("../assets/gamehub.png", import.meta.url);
const BottomRackClothing = new URL(
  "../assets/bottomrackclothing.png",
  import.meta.url
);
const CosmosForgePicture = new URL(
  "../assets/cosmosforge.png",
  import.meta.url
);

const projects: Project[] = [
  {
    title: "GameHub",
    description: "Web Design & Development",
    image: GameHubImage.toString(),
    link: "/GameHub",
  },
  {
    title: "Bottom Rack Clothing",
    description: "Web Design & Development",
    image: BottomRackClothing.toString(),
    link: "/BottomRackClothing",
  },
  {
    title: "Cosmos Forge",
    description: "Web Design & Development",
    image: CosmosForgePicture.toString(),
    link: "/CosmosForge",
  },
];

const Magtech = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)">
        <VStack justifyContent="center">
          <Heading as="h1" size="4xl">
            Magtech Development
          </Heading>
          <Heading as="h3" size="lg">
            Branding & Web Design
          </Heading>
        </VStack>
      </Box>

      <Box mt="80px" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={MagtechImage.toString()}
          alt="Magtech Development"
          height="600px"
          width="900px"
          objectFit="fill"
          borderRadius="6px"
        />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <VStack align="start" maxWidth="800px">
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            Who
          </Text>
          <Text as="p" fontSize="18px">
            <Link href="https://magtech.dev/" isExternal color="#67d391">
              Magtech Development
            </Link>{" "}
            is my first portfolio I created using Webflow and custom code.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            The challenge was to create a portfolio using the skills I have
            learned while also learning how to use a site like Webflow. Another
            challenge was to make the site look professional and easy to
            navigate.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize="18px">
            The solution was to create a site that was easy to navigate and
            professional. I used custom code to make the site more dynamic and
            added animations to make the site more engaging.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize="18px">
            The result was a professional and engaging portfolio that showcases
            my skills and projects. The site is easy to navigate and looks great
            on all devices. For a more in-depth look at my first portfolio,
            click the "Magtech Development" link above.
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
                  width="400px"
                  height="300px"
                  objectFit="fill"
                  mb={5}
                />
                <Heading as="h3" fontSize="24px">
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
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
export default Magtech;
