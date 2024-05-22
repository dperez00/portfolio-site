import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <HStack justifyContent="center">
        <Text>Explore My</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h1" fontSize="48px" color="#67d391" mb="32px">
          Experience
        </Heading>
      </HStack>
      <Card
        alignItems="center"
        borderRadius="32px"
        padding="24px"
        maxW="850px"
        mx="auto"
        mb="250px"
      >
        <CardHeader>
          <Heading as="h2" fontSize="28px" mb="32px">
            Frontend Development
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
      </Card>
    </>
  );
};

export default Skills;
