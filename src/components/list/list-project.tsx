import { Heading, Text, VStack } from '@chakra-ui/react';

const ListProject = () => {
  return (
    <>
      <VStack
        align="start"
        as="a"
        href="https://www.parawisely.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        w="full"
        borderRadius="md"
        border="1px solid gray"
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
