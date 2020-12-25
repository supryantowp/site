import { Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import TitleSeperator from '@/components/title-seperator';

const metaTags = {
  title: 'My Gear',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus nulla quasi officiis? Debitis nesciunt quisquam voluptas, officiis facilis sunt.',
};

const Uses = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <NextSeo {...metaTags} />
      <TitleSeperator {...metaTags} />
    </Stack>
  );
};

export default Uses;
