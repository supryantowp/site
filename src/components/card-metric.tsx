import { Heading, Stack, Text } from '@chakra-ui/react';

interface CardMetricProps {
  title: string;
  count: string | number;
  href: string;
}

const CardMetric = ({ title, count, href }: CardMetricProps) => {
  return (
    <Stack
      as="a"
      href={href}
      target="_blank"
      p={4}
      border="1px solid gray"
      borderRadius="md"
    >
      <Text fontSize="xl">{title}</Text>
      <Heading>{count ?? '-'}</Heading>
    </Stack>
  );
};

export default CardMetric;
