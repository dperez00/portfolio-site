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

const projects: Project[] = [
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
  {
    title: "Bottom Rack Clothing",
    description: "Web Design & Development",
    image: "/assets/bottomrackclothing.PNG",
    link: "/BottomRackClothing",
  },
];

const BeaningfulCoffee = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA, green.300)" p={{ base: 4, md: 8 }}>
        <VStack justifyContent="center" spacing={{ base: 4, md: 8 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} textAlign="center">
            Beaningful Coffee
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
        <iframe
          src="https://www.loom.com/embed/1441631152854ba5b437e7b5bd8f6408?sid=bd8f217a-7f11-4205-b4e3-2a3cbbe7506c"
          width="100%"
          height="auto"
          style={{ maxWidth: "900px", minHeight: "400px" }}
          allowFullScreen
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
            Beaningful Coffee is an online coffee shop. It holds a variety of
            coffee aromas and even has a subscription for customers who want to
            enjoy the coffee of the month.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Challenge
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
            Being in the specialty eatery industry is very competitive.
            Especially when you have companies like Starbucks, Dunkin' Donuts,
            and 7 Brew to compete with. Not to mention other eCommerce coffee
            brands. A store like this will need a site that stands out from
            other coffee sites and provides great features that customers will
            enjoy.
          </Text>
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Solution
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
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
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            The Result
          </Text>
          <Text as="p" fontSize={{ base: "md", md: "lg" }}>
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

export default BeaningfulCoffee;
