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
  useBreakpointValue,
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
      { name: "Tailwind CSS" },
      { name: "Shadcn/UI" },
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

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const headingFontSize = useBreakpointValue({ base: "32px", md: "48px" });
  const subHeadingFontSize = useBreakpointValue({ base: "24px", md: "28px" });
  const textFontSize = useBreakpointValue({ base: "16px", md: "18px" });
  const cardMaxWidth = useBreakpointValue({ base: "100%", md: "850px" });
  const cardMarginBottom = useBreakpointValue({ base: "100px", md: "250px" });
  const gridSpacing = useBreakpointValue({ base: 5, md: 14 });

  return (
    <>
      <HStack justifyContent="center">
        <Text fontSize={textFontSize}>Explore My</Text>
      </HStack>
      <HStack justifyContent="center">
        <Heading as="h1" fontSize={headingFontSize} color="#67d391" mb="32px">
          Experience
        </Heading>
      </HStack>
      <Card
        borderRadius="6px"
        maxW={cardMaxWidth}
        mx="auto"
        mb={cardMarginBottom}
        alignItems="center"
      >
        <CardHeader>
          <Heading as="h2" fontSize={subHeadingFontSize} mb="32px">
            Frontend Development & Tools
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={columns} spacing={gridSpacing}>
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
            bgGradient="linear(to-l, #7928CA, green.300)"
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
