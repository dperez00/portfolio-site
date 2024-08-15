import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
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
const CosmosForgeAffiliatePicture = new URL(
  "../assets/cosmosforgeaffiliate.png",
  import.meta.url
);
const BeaningfulCoffeePicture = new URL(
  "../assets/beaningfulcoffee.png",
  import.meta.url
);
const MagtechImage = new URL("../assets/magtech.png", import.meta.url);

const projects: Project[] = [
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
  {
    title: "Magtech Development",
    description: "Web Design & Development",
    image: MagtechImage.toString(),
    link: "/Magtech",
  },
];

const CosmosForge = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)">
        <VStack justifyContent="center">
          <Heading as="h1" size="4xl">
            Cosmos Forge
          </Heading>
          <Heading as="h3" size="lg">
            Web Design & Development
          </Heading>
        </VStack>
      </Box>

      <Box mt="80px" display="flex" justifyContent="center" alignItems="center">
        <iframe
          src="https://www.loom.com/embed/35f4875efd5c4bc38446d432f6cdea99?sid=6afc37e7-ac1e-422d-803c-a1cdbed438d0"
          width="900px"
          height="600px"
          allowFullScreen
        />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <VStack align="start" maxWidth="800px">
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            Who
          </Text>
          <Text as="p" fontSize="18px">
            Cosmos Forge is a store that sells galaxy projectors. It projects an
            array of colorful stars and galaxies onto ceilings and walls.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            This website was to accommodate their sales from their Instagram.
            They wanted an easy and adaptable page that could be linked to their
            Instagram. No premium theme was used for this site, so it required a
            lot of customization.
            <br />
            <br />
            This case, linking Instagram required custom integration. Some other
            features needing customization were the UX/UI layout and the FAQ
            page.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize="18px">
            The landing page showcases a minimalistic custom design and a
            image-text layout for easily adding images with text. Instagram was
            integrated to showcase their pictures/post from their customers on
            the website. To prevent clutter in the FAQ section, I created an
            accordion page using custom coding.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize="18px">
            Cosmos Forge now has an easy to maintain and adaptable store to
            their existing Instagram presence. They now have the ability to
            easily replace images/text and showcase customer posts/reviews.
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

export default CosmosForge;
