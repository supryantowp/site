import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const BlogLayout = ({ children, frontMatter }) => {
  console.log(children);
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={4}>
      <Box mb={8}>
        <Heading fontWeight="bold" letterSpacing="-3px" fontSize="5xl">
          {frontMatter.title}
        </Heading>
        <Flex align="center" mt={2}>
          <Avatar size="xs" mr={2} src="/now-playing.jpg" name="supryantowp" />
          <Text color="gray.300">Supuryantowp / December 09, 2020 </Text>
        </Flex>
      </Box>
      {children}
    </Stack>
  );
};

export default BlogLayout;
