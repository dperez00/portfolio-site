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
      <Box bgGradient="linear(to-l, #7928CA, green.300)" p={{ base: 4, md: 8 }}>
        <VStack justifyContent="center" spacing={{ base: 4, md: 8 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} textAlign="center">
            Magtech Development
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
        <Image
          src={MagtechImage.toString()}
          alt="Magtech Development"
          width="100%"
          height="auto"
          style={{ maxWidth: "900px", minHeight: "400px" }}
          objectFit="fill"
          borderRadius="6px"
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
            <Link href="https://magtech.dev/" isExternal color="#67d391">
              Magtech Development
            </Link>{" "}
            is my first portfolio I created using Webflow and custom code.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            The challenge was to create a portfolio showcasing the skills I have
            learned while also learning how to use a site like Webflow. Another
            challenge was to make the site look professional and user-friendly
            in navigate.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            The solution was to create a site that was easy to navigate and
            professional. I used custom code to make the site more dynamic and
            added animations to make the site more engaging.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            The result was a professional and engaging portfolio that showcases
            my skills and projects. The site is easy to navigate and looks great
            on all devices. For a more in-depth look at my first portfolio,
            click the "Magtech Development" link above.
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
export default Magtech;
