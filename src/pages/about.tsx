import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <Box>
        <Heading>About Me</Heading>
        <Text mt={2} color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          repellendus nulla quasi officiis? Debitis nesciunt quisquam voluptas,
          officiis facilis sunt.
        </Text>
      </Box>
    </Stack>
  );
};

export default About;
