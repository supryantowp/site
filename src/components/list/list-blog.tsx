import { Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ListBlogProps {
  title: string;
  summary: string;
  slug: string;
}

const ListBlog = ({ title, summary, slug }: ListBlogProps) => {
  return (
    <Stack as="a" _hover={{ cursor: 'pointer' }} role="group" spacing={1}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        spacing={4}
      >
        <NextLink href={`/blog/${slug}`} passHref>
          <Heading fontSize="xl" variant="link">
            {title}
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
        {summary}
      </Text>
    </Stack>
  );
};

export default ListBlog;
