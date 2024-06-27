import { CheckCircleIcon } from "@chakra-ui/icons";
import {
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
    [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Shopify" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
      { name: "Chakra UI" },
      { name: "Material UI" },
    ],
    [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitHub Copilot" },
      { name: "React Router" },
      { name: "React Query" },
      { name: "Vite" },
    ],
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
      <Card
        borderRadius="6px"
        maxW="850px"
        mx="auto"
        mb="250px"
        alignItems="center"
      >
        <CardHeader>
          <Heading as="h2" fontSize="28px" mb="32px">
            Frontend Development & Tools
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={3} spacing={14}>
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
    </>
  );
};

export default Skills;
