import { Heading, Text, useColorMode, VStack } from '@chakra-ui/react';

const ListProject = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <VStack
        align="start"
        as="a"
        _hover={{ cursor: 'pointer', shadow: 'md' }}
        href="https://www.parawisely.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        w="full"
        borderRadius="md"
        border={`1px solid ${colorMode === 'dark' ? '#2D3748' : '#E2E8F0'}`}
        px={6}
        py={3}
      >
        <Heading fontSize="xl">
          Parawisely{' '}
          <span aria-label="icon" role="img">
            🥈
          </span>
        </Heading>
        <Text>Website yang memenangkan lomba di UNJ </Text>
      </VStack>
    </>
  );
};

export default ListProject;
