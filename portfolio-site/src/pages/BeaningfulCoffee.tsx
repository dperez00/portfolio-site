import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
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
const CosmosForgePicture = new URL(
  "../assets/cosmosforge.png",
  import.meta.url
);
const CosmosForgeAffiliatePicture = new URL(
  "../assets/cosmosforgeaffiliate.png",
  import.meta.url
);
const BeaningfulCoffeePicture = new URL(
  "../assets/beaningfulcoffee.png",
  import.meta.url
);

const projects: Project[] = [
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
  {
    title: "Beaningful Coffee",
    description: "Web Design & Development",
    image: BeaningfulCoffeePicture.toString(),
    link: "/BeaningfulCoffee",
  },
];

const BeaningfulCoffee = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)">
        <VStack justifyContent="center">
          <Heading as="h1" size="4xl">
            Beaningful Coffee
          </Heading>
          <Heading as="h3" size="lg">
            Branding & Web Design
          </Heading>
        </VStack>
      </Box>

      <Box mt="80px" display="flex" justifyContent="center" alignItems="center">
        <iframe
          src="https://www.loom.com/embed/1441631152854ba5b437e7b5bd8f6408?sid=bd8f217a-7f11-4205-b4e3-2a3cbbe7506c"
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
            Beaningful Coffee is an online coffee shop. It holds a variety of
            coffee aromas and even has a subscription for customers who want to
            enjoy the coffee of the month.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize="18px">
            Being in the specialty eatery industry is very competitive.
            Especially when you have companies like Starbucks, Dunkin' Donuts,
            and 7 Brew to compete with. Not to mention other eCommerce coffee
            brands. A store like this will need a site that stands out from
            other coffee sites and provides great features that customers will
            enjoy.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize="18px">
            To make the site stand out more, I used a mixture of the Shopify
            Dawn theme, custom code, and premium pictures. The premium pictures
            will help the page sections “pop” more and set the tone for the
            site. Using custom code, I implemented a custom metafield section
            that is dynamic and includes a meter to track “acidity” and
            “strength” of the coffee products. I also implemented a custom
            template to the “about us” section that alternates the image and
            text with each new section to make reading easier and more appealing
            to the eye.
          </Text>
          <Text as="h3" fontSize="24px" mt="20px" mb="10px" fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize="18px">
            Beaningful Coffee is now completely dynamic. With an emphasis on
            ease of use, the custom code I implemented now makes it easier for
            the store owner to customize every page and section, empowering them
            to make easy changes on their own time. It also has a great mix of
            images, color, and features that make the entire store stand out.
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

export default BeaningfulCoffee;
