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
];

const Klimate = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)" p={{ base: 4, md: 8 }}>
        <VStack justifyContent="center" spacing={{ base: 4, md: 8 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} textAlign="center">
            Klimate
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
          src="/assets/Klimate.png"
          alt="Klimate"
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
            <Link
              href="https://klimate-psi.vercel.app/"
              isExternal
              color="#67d391"
            >
              Klimate
            </Link>{" "}
            is a beautiful weather app with features like current weather,
            forecast, graphical representation for next 24 hour temperatures,
            search any city in the world, light/dark mode, and is fully
            responsive.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            The challenge was to create a weather app that is not only
            functional but also visually appealing. I wanted to ensure that the
            app was user-friendly and provided all the necessary information at
            a glance.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            I developed this application using React and TypeScript as the core
            foundation, providing strong type safety and component reusability
            throughout the codebase. For the frontend architecture, I leveraged
            Shadcn/UI components alongside Tailwind CSS for efficient styling
            and responsive design implementation. To handle API interactions
            efficiently, I implemented TanStack Query (formerly React Query) for
            data fetching, caching, and state management, which significantly
            improved performance by minimizing unnecessary network requests. The
            weather data visualization is powered by Recharts, enabling
            interactive and responsive graphical representations of 24-hour
            temperature forecasts. The application architecture follows modern
            best practices with custom hooks for data fetching, context for
            state management, and component composition for UI modularity. I
            also implemented features like theme switching between light/dark
            modes using React context and localStorage persistence, ensuring a
            seamless user experience across sessions.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            <Text as="p" fontSize={{ base: "md", md: "lg" }}>
              The outcome was a visually appealing and responsive website that
              effectively demonstrated my proficiency in React and TypeScript.
              Utilizing the OpenWeather API, I retrieved and displayed weather
              data on the site. Shadcn/UI was employed to ensure the site was
              both aesthetically pleasing and responsive. TanStack Query was
              integrated to cache data, enhancing the site's performance, while
              I also implemented features like search history and the ability to
              save favorite locations using TanStack Query mutations. These
              features improved user experience by allowing quick access to
              previously searched locations and personalized content. For a more
              in-depth look at my project, click the "Klimate" link above.
            </Text>
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

export default Klimate;
