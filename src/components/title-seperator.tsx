import { Box, Heading, Text } from '@chakra-ui/react';

interface TitleSeperatorProps {
  title: string;
  description: string;
}

const TitleSeperator = ({ title, description }: TitleSeperatorProps) => {
  return (
    <Box>
      <Heading>{title}</Heading>
      <Text mt={2} color="gray.500">
        {description}
      </Text>
    </Box>
  );
};

export default TitleSeperator;
