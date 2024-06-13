import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Skills = () => {
  const [page, setPage] = useState(0);

  const skills = [
    [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    [{ name: "Shopify" }, { name: "React" }, { name: "TypeScript" }],
    // add more as needed
  ];

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % skills.length);
  };

  return (
    <>
      <HStack justifyContent="center">
        <Text fontSize="18px">Explore My</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h1" fontSize="48px" color="#67d391" mb="32px">
          Experience
        </Heading>
      </HStack>
      {/* <Card
        alignItems="center"
        borderRadius="6px"
        padding="24px"
        maxW="850px"
        mx="auto"
        mb="250px"
      >
        <CardHeader>
          <Heading as="h2" fontSize="28px" mb="32px">
            Frontend Development & Tools
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={3} spacing={20}>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                HTML
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                CSS
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                JavaScript
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                Shopify
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                React
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                TypeScript
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                Chakra UI
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                Bootstrap
              </Heading>
            </HStack>
            <HStack>
              <CheckCircleIcon color="#67d391" />
              <Heading as="h3" fontSize="24px">
                GitHub Copilot
              </Heading>
            </HStack>
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Button bgGradient="linear(to-l, #7928CA, green.300)">Next</Button>
        </CardFooter>
      </Card> */}
      {/* <Card
        alignItems="center"
        borderRadius="6px"
        padding="24px"
        maxW="850px"
        mx="auto"
        mb="250px"
      >
        <CardHeader>
          <Heading as="h2" fontSize="28px" mb="32px">
            Frontend Development & Tools
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} spacing={20}>
            {skills[page].map((skill) => (
              <HStack key={skill}>
                <CheckCircleIcon color="#67d391" />
                <Heading as="h3" fontSize="24px">
                  {skill}
                </Heading>
              </HStack>
            ))}
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Button
            bgGradient="linear(to-l, #7928CA, green.300)"
            onClick={handleNext}
          >
            Next
          </Button>
        </CardFooter>
      </Card> */}
      <Box maxW="850px" mx="auto" mb="250px">
        <Card>
          <CardHeader>
            <Heading as="h2" fontSize="28px" mb="32px" textAlign="center">
              Frontend Development & Tools
            </Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={2} spacing={20}>
              {skills[page].map((skill) => (
                <HStack key={skill.name}>
                  <CheckCircleIcon color="#67d391" />
                  <Heading as="h3" fontSize="24px">
                    {skill.name}
                  </Heading>
                </HStack>
              ))}
            </SimpleGrid>
          </CardBody>
          <CardFooter>
            <Button
              bgGradient="linear(to-1, #7928CA, green.300)"
              onClick={handleNext}
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Skills;
