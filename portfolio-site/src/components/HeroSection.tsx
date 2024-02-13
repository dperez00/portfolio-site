import { Avatar, Text, HStack, Heading, VStack, Box } from "@chakra-ui/react";
import AvatarLogo from "../assets/Avatar Transparent.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [word, setWord] = useState("Developer");
  const words = ["React Developer", "Shopify Developer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        if (currentIndex === words.length - 1) {
          return words[0];
        } else {
          return words[currentIndex + 1];
        }
      });
    }, 2000); // change word every 2 seconds
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <HStack justifyContent="center">
      <VStack>
        <Heading as="h1" size="4xl" padding="35px" mb="-50px" mr="20px">
          David Perez
        </Heading>
        <Text fontSize="5xl">
          I'm a{" "}
          <Box
            as="span"
            bgGradient="linear(to-l, #7928CA, green.300)"
            bgClip="text"
          >
            {word}
          </Box>
        </Text>
      </VStack>
      <Avatar size="3xl" bg="green.300" name="David Perez" src={AvatarLogo} />
    </HStack>
  );
};

export default HeroSection;
