import { Heading, VStack } from '@chakra-ui/react';

import ListProject from './list/list-project';

const LatestProject = () => {
  return (
    <VStack align="start" spacing={4}>
      <Heading>Latest Projects</Heading>
      <ListProject />
    </VStack>
  );
};

export default LatestProject;
