import {
  HStack,
  VStack,
  Text,
  Heading,
  Flex,
  SimpleGrid,
  Card,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import laptop from "../assets/laptop picture.jpg";
import screens from "../assets/money screens.jpg";
import languages from "../assets/coding languages.png";
import coding from "../assets/coding.jpg";

const AboutMe = () => {
  const headingFontSize = useBreakpointValue({ base: "32px", md: "48px" });
  const textFontSize = useBreakpointValue({ base: "16px", md: "18px" });
  const boldTextFontSize = useBreakpointValue({ base: "18px", md: "22px" });
  const marginTop = useBreakpointValue({ base: "100px", md: "250px" });
  const marginBottom = useBreakpointValue({ base: "100px", md: "250px" });
  const gridGap = useBreakpointValue({ base: 2, md: 3 });
  const gridColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <>
      <HStack justifyContent="center" mt={marginTop}>
        <Text fontSize={textFontSize}>Get To Know More</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h1" fontSize={headingFontSize} color="#67d391" mb="32px">
          About Me
        </Heading>
      </HStack>
      <VStack justifyContent="center">
        <Text width="80%" as="b" fontSize={boldTextFontSize}>
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
      <Flex justifyContent="center">
        <SimpleGrid
          columns={gridColumns}
          gap={gridGap}
          mt="50px"
          mb={marginBottom}
        >
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
