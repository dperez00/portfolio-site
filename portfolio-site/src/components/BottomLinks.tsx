import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";

const BottomLinks = () => {
  return (
    <Box>
      <HStack justifyContent="center">
        <List display="flex" flexDirection="row">
          <ListItem mr={10} fontSize="20px">
            About
          </ListItem>
          <ListItem mr={10} fontSize="20px">
            Experience
          </ListItem>
          <ListItem mr={10} fontSize="20px">
            Projects
          </ListItem>
          <ListItem fontSize="20px">Contact</ListItem>
        </List>
      </HStack>
      <HStack justifyContent="center">
        <Text fontSize="16px" mt={10} mb={8}>
          Copyright © 2024 David Perez. All Rights Reserved
        </Text>
      </HStack>
    </Box>
  );
};

export default BottomLinks;
