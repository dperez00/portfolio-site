import {
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import languages from "../assets/coding languages.png";
import coding from "../assets/coding.jpg";
import laptop from "../assets/laptop picture.jpg";
import screens from "../assets/money screens.jpg";

const AboutMe = () => {
  return (
    <>
      <HStack justifyContent="center" mt="250px">
        <Text fontSize="18px">Get To Know More</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h1" fontSize="48px" color="#67d391" mb="32px">
          About Me
        </Heading>
      </HStack>
      <VStack justifyContent="center">
        <Text width="80%" as="b" fontSize="22px">
          Hello! My name is David. I embarked on my journey as a web developer
          in 2021, and since then, I've honed my skills to create engaging and
          dynamic websites, such as the one you're viewing now. My passion lies
          in crafting digital experiences that not only captivate users but also
          drive business growth. I've gained substantial experience working with
          frontend technologies. As I continue on this exciting path, I look
          forward to the opportunities it will bring, the challenges I'll
          overcome, and the diverse individuals I'll have the pleasure of
          meeting. I'm thrilled to see where this journey takes me next.
        </Text>
      </VStack>
      {/* build a 2x2 grid to display images */}
      <Flex justifyContent="center">
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={3} mt="50px" mb="250px">
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
