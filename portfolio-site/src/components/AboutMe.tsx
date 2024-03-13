import { Heading, Text, VStack } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <>
      <VStack justifyContent="center" mt="50px" bgColor="#67d391">
        <Heading as="h2" size="2xl">
          About Me
        </Heading>
      </VStack>
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
    </>
  );
};

export default AboutMe;
