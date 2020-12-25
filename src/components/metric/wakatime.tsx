import { Text } from '@chakra-ui/react';
import useSWR from 'swr';

import CardMetric from '@/components/card-metric';
import Fetcher from '@/lib/fetcher';
import { siteConfig } from '~/site.config';

const Wakatime = () => {
  const { data } = useSWR('/api/waka-stat', Fetcher);

  return (
    <>
      <CardMetric
        title="Average Daily Coding"
        count={data?.dailyCoding}
        href={siteConfig.socials.Github}
      />
      <CardMetric
        title="Primary Language"
        count={data?.primaryLanguage.name}
        href={siteConfig.socials.Github}
      />
    </>
  );
};

export default Wakatime;
