import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import useSWR from 'swr';

import Fetcher from '@/lib/fetcher';

const ListTopTrack = () => {
  const { data } = useSWR('/api/top-track', Fetcher);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack spacing={6}>
      <Flex direction="column">
        <Heading>Top Tracks</Heading>
        <Text mt={2} color="gray.500">
          If we listen to the same music, we’ll probably be friends
        </Text>
      </Flex>

      {data.tracks.map((track, index) => (
        <div key={track.songUrl}>
          <Flex py={4} as="a" href={track.songUrl} target="_blank">
            <Text mr={4}>{index + 1}.</Text>
            <Box>
              <Heading fontSize="lg">{track.title}</Heading>
              <Text color="gray.500">{track.artist}</Text>
            </Box>
          </Flex>
          <Divider borderColor="gray.500" />
        </div>
      ))}
    </Stack>
  );
};

export default ListTopTrack;
