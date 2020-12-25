import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Github from '@/components/metric/github';
import Youtube from '@/components/metric/youtube';

import Wakatime from '../metric/wakatime';

const ListStatic = () => {
  return (
    <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }}>
      <Youtube />
      <Github />
      <Wakatime />
    </SimpleGrid>
  );
};

export default ListStatic;
