import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';

import { routes } from '@/routes';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      className="navbar"
      pos="sticky"
      top={0}
      w="full"
      as="nav"
      justify="space-between"
      align="center"
      px={{ base: 5, md: 40 }}
      py={10}
      borderTop="5px solid #09dddc"
      background={colorMode === 'dark' ? 'gray.800' : 'white'}
      zIndex={2}
    >
      <HStack spacing={{ base: 4, md: 8 }}>
        {routes.map(([text, href]) => (
          <div key={href}>
            <NextLink href={href} key={href}>
              <Link href={href}>{text}</Link>
            </NextLink>
          </div>
        ))}
      </HStack>
      <IconButton
        aria-label="toogle-button"
        icon={
          colorMode == 'dark' ? (
            <Icon as={FiMoon} boxSize={5} />
          ) : (
            <Icon as={FiSun} boxSize={5} />
          )
        }
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
