import { Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Intro from '@/components/intro';
import LatestBlog from '@/components/latest-blog';
import LatestProject from '@/components/latest-project';
import { siteConfig } from '~/site.config';

const metaTags = {
  title: 'Supryanto Widadi Putra',
  description: siteConfig.description,
};

const HomePage = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <NextSeo {...metaTags} titleTemplate="%s" />
      <Intro />
      <LatestBlog />
      <LatestProject />
    </Stack>
  );
};

export default HomePage;
