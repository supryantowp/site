import { Flex, Heading, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const CardNowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <HStack
      as="a"
      href={data?.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      border="1px solid gray"
      borderRadius="md"
      p={2}
      spacing={4}
      align="start"
      minW="300px"
      justify="space-between"
    >
      <Flex align="center" direction="row">
        <Image
          src={data?.albumImageUrl || '/now-playing.jpg'}
          width="50px"
          height="50px"
          borderRadius="md"
        />
        <Flex ml={4} direction="column">
          <Heading fontSize="lg">{data?.title ?? 'Not Playing'}</Heading>
          <Text fontSize="sm" color="gray.500">
            {data?.artist ?? 'Spotify'}
          </Text>
        </Flex>
      </Flex>
      <Icon color="green.400" as={FaSpotify} />
    </HStack>
  );
};

export default CardNowPlaying;
