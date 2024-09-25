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
const GameHubImage = new URL("../assets/gamehub.png", import.meta.url);
const BottomRackImage = new URL(
  "../assets/bottomrackclothing.png",
  import.meta.url
);
const CosmosForgePicture = new URL(
  "../assets/cosmosforge.png",
  import.meta.url
);
const CosmosForgeAffiliatePicture = new URL(
  "../assets/cosmosforgeaffiliate.png",
  import.meta.url
);

const projects: Project[] = [
  {
    title: "Bottom Rack Clothing",
    description: "Web Design & Development",
    image: BottomRackImage.toString(),
    link: "/BottomRackClothing",
  },
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
];

const GameHub = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)" p={{ base: 4, md: 8 }}>
        <VStack justifyContent="center" spacing={{ base: 4, md: 8 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} textAlign="center">
            GameHub
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
          src={GameHubImage.toString()}
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
            Of all my projects, my{" "}
            <Link
              href="https://game-hub-1-five.vercel.app/"
              isExternal
              color="#67d391"
            >
              GameHub
            </Link>{" "}
            stands out as my favorite. This project was developed to demonstrate
            my proficiency in React and TypeScript, along with other
            technologies.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            The challenge was to utilize new technologies to develop a GameHub
            capable of searching an extensive database of games, displaying
            detailed game pages with images and trailers (when available), and
            displaying the platforms each game is available on.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            The solution involved leveraging technologies such as React,
            TypeScript, React Query, React Router, Chakra UI, and Zustand to
            develop a visually appealing and responsive website.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            The outcome was a visually appealing and responsive website that
            effectively demonstrated my proficiency in React and TypeScript.
            Utilizing the RAWG API, I retrieved and displayed game data on the
            site. Chakra UI was employed to ensure the site was both
            aesthetically pleasing and responsive. React Query was integrated to
            cache data, enhancing the site's performance. Zustand was used for
            state management, and React Router facilitated seamless navigation
            throughout the site. For a more in-depth look at my project, click
            the "GameHub" link above.
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
export default GameHub;
