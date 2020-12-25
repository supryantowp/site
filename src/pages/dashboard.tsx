import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import ListStatic from '@/components/list/list-static';
import ListTopTrack from '@/components/list/list-top-track';

const Dashboard = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <Box>
        <Heading>Dashboard</Heading>
        <Text mt={2} color="gray.500">
          This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions. I use this dashboard to track various metrics
          across platforms like Unsplash, YouTube, GitHub, and more. Want to
          build your own? Check out my blog series.
        </Text>
      </Box>

      <ListStatic />
      <ListTopTrack />
    </Stack>
  );
};

export default Dashboard;
