import { Heading, VStack } from '@chakra-ui/react';

import ListBlog from './list/list-blog';

const LatestBlog = () => {
  return (
    <VStack align="start" spacing={4}>
      <Heading>Latest Blog</Heading>
      <ListBlog />
    </VStack>
  );
};

export default LatestBlog;
