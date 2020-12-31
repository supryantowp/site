import { Heading, VStack } from '@chakra-ui/react';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import ListBlog from './list/list-blog';

const LatestBlog = ({ posts }) => {
  return (
    <VStack align="start" spacing={4}>
      <Heading>Latest Blog</Heading>
      <ListBlog {...posts} />
    </VStack>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      posts,
    },
  };
}

export default LatestBlog;
