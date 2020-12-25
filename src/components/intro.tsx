/* eslint-disable jsx-a11y/accessible-emoji */
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Intro = () => {
  return (
    <Stack mb={4}>
      <Flex align="center">
        <Heading mr={2}>Hey, I’m Supryanto </Heading>
        <Image
          src="/emojis/wave.png"
          w={8}
          h={8}
          transition="transform 150ms ease"
          _hover={{
            transform: 'translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -10deg)',
          }}
        />
      </Flex>
      <Text color="gray.500">
        I’ a developer, gamer. I study at Smkn 1 Ciamis as Software enginerring.
        You’ve found my personal slice of the internet – everything you want to
        know and more is here.
      </Text>
    </Stack>
  );
};

export default Intro;
