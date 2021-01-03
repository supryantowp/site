/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FiMail, FiZap } from 'react-icons/fi';

const Intro = () => {
  return (
    <Stack mb={4} spacing={4}>
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

      <Alert p={4} status="success" variant="left-accent" flexWrap="wrap">
        <AlertIcon as={FiZap} />
        <AlertTitle fontSize="xl">Hire me!</AlertTitle>
        <AlertDescription my={4}>
          I build web apps for startups, businesses and public institutions as a
          freelance web developer and designer. Let`s discuss your needs and
          what solutions I can bring.
        </AlertDescription>
        <Button
          as="a"
          href="mailto:supryantowp21@gmail.com"
          target="_blank"
          leftIcon={<FiMail />}
          colorScheme="green"
          variant="solid"
        >
          Email
        </Button>
      </Alert>
    </Stack>
  );
};

export default Intro;
