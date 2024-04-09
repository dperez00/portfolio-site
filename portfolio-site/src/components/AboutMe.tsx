import {
  Box,
  Card,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import laptop from "../assets/laptop picture.jpg";
import languages from "../assets/coding languages.png";
import coding from "../assets/coding.jpg";
import javascript from "../assets/javascript picture.jpg";
import screens from "../assets/money screens.jpg";

const AboutMe = () => {
  return (
    <>
      <HStack justifyContent="center" mt="100px" bgColor="#67d391">
        <Heading as="h2" size="2xl">
          About Me
        </Heading>
      </HStack>
      <VStack justifyContent="center">
        <Heading as="h2" color="#7928CA">
          My journey as a developer
        </Heading>
        <Text width="80%" as="b" fontSize="lg">
          Hello! My name is David. I embarked on my journey as a web developer
          in 2021, and since then, I've honed my skills to create engaging and
          dynamic websites, such as the one you're viewing now. My passion lies
          in crafting digital experiences that not only captivate users but also
          drive business growth. I've gained substantial experience working with
          technologies like React, TypeScript, and Shopify. As I continue on
          this exciting path, I look forward to the opportunities it will bring,
          the challenges I'll overcome, and the diverse individuals I'll have
          the pleasure of meeting. I'm thrilled to see where this journey takes
          me next.
        </Text>
      </VStack>
      {/* <HStack maxW="100%" justifyContent="center" mt="20px" mb="50px">
        <Box maxW="100%" h="auto">
          <Image
            src={laptop}
            boxSize={["150px", "200px", "300px", "350px"]}
            objectFit="cover"
          />
        </Box>
        <Box maxW="100%" h="auto">
          <Image
            src={languages}
            boxSize={["150px", "200px", "300px", "350px"]}
            objectFit="cover"
          />
        </Box>
        <Box maxW="100%" h="auto">
          <Image
            src={coding}
            boxSize={["150px", "200px", "300px", "350px"]}
            objectFit="cover"
          />
        </Box>
        <Box maxW="100%" h="auto">
          <Image
            src={javascript}
            boxSize={["150px", "200px", "300px", "350px"]}
            objectFit="cover"
          />
        </Box>
      </HStack> */}

      {/* build a 2x2 grid to display images */}
      <Flex justifyContent="center">
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={3} mt="20px" mb="50px">
          <Card maxW="300px" maxH="200px">
            <Image src={laptop} boxSize="100%" />
          </Card>
          <Card maxW="300px" maxH="200px">
            <Image src={screens} boxSize="100%" />
          </Card>
          <Card maxW="300px" maxH="300px">
            <Image src={languages} boxSize="100%" />
          </Card>
          <Card maxW="300px" maxH="300px">
            <Image src={coding} boxSize="100%" />
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default AboutMe;
