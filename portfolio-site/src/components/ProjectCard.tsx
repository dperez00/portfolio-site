import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Image src={imageUrl} alt={title} />
      <Text fontSize="xl" fontWeight="bold" mt="4">
        {title}
      </Text>
      <Text mt="2">{description}</Text>
    </Box>
  );
};

export default ProjectCard;
