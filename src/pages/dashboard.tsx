import { Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import ListStatic from '@/components/list/list-static';
import ListTopTrack from '@/components/list/list-top-track';
import TitleSeperator from '@/components/title-seperator';

const metaTags = {
  title: 'Dashboard',
  description:
    'This is my personal dashboard, built with Next.js API routes deployed as serverless functions. I use this dashboard to track various metrics across platforms like Wakatime, YouTube, GitHub, and more.',
};

const Dashboard = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <NextSeo {...metaTags} />
      <TitleSeperator {...metaTags} />
      <ListStatic />
      <ListTopTrack />
    </Stack>
  );
};

export default Dashboard;
