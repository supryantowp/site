import { Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const ListBlog = () => {
  return (
    <Stack as="a" _hover={{ cursor: 'pointer' }} role="group" spacing={1}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        spacing={4}
      >
        <NextLink href="/blog/mantap" passHref>
          <Heading fontSize="xl" variant="link">
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
