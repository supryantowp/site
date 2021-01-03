import { Heading, Stack, Text, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

const ListBlog = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      as="a"
      _hover={{ cursor: 'pointer', shadow: 'md' }}
      role="group"
      spacing={1}
      border={`1px solid ${colorMode === 'dark' ? '#2D3748' : '#E2E8F0'}`}
      bgColor={colorMode === 'dark' ? 'gray.800' : 'white'}
      p={6}
      borderRadius="md"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        spacing={4}
      >
        <NextLink href="/blog/mantap" passHref>
          <Heading fontSize="xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            modi.
          </Heading>
        </NextLink>
        <Text color="gray.600">2/12/2020</Text>
      </Stack>
      <Text
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
        color="gray.500"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nostrum
        illo minus? Impedit maxime tempore quasi ea numquam enim excepturi
        provident praesentium consequuntur deserunt a nobis culpa labore,
        assumenda mollitia?
      </Text>
    </Stack>
  );
};

export default ListBlog;
