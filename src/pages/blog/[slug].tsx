import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const BlogDetail = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <Box>
        <Heading fontWeight="bold" letterSpacing="-3px" fontSize="5xl">
          Which Back End Should I Use As A Front-End Developer?
        </Heading>
        <Flex align="center" mt={2}>
          <Avatar size="xs" mr={2} src="/now-playing.jpg" name="supryantowp" />
          <Text color="gray.300">Supuryantowp / December 09, 2020 </Text>
        </Flex>
      </Box>

      <Box>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          corrupti dolorem inventore, laudantium ea doloribus optio voluptate
          blanditiis debitis labore veritatis accusamus corporis eius sed
          exercitationem quae rerum saepe asperiores quidem et repudiandae
          ipsam. Aspernatur ea nulla obcaecati adipisci! Iusto!
        </Text>
      </Box>
    </Stack>
  );
};

export default BlogDetail;
