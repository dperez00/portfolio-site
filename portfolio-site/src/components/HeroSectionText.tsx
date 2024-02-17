import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HeroSectionText = () => {
  const [word, setWord] = useState("React Developer");
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
    <>
      <VStack>
        <Heading as="h1" size="4xl">
          David Perez
        </Heading>
        <Text fontSize="4xl">
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
    </>
  );
};

export default HeroSectionText;
