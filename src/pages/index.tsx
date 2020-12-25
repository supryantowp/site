import { Stack } from '@chakra-ui/react';

import Intro from '@/components/intro';
import LatestBlog from '@/components/latest-blog';
import LatestProject from '@/components/latest-project';

const HomePage = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <Intro />
      <LatestBlog />
      <LatestProject />
    </Stack>
  );
};

export default HomePage;
