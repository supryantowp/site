import useSWR from 'swr';

import CardMetric from '@/components/card-metric';
import Fetcher from '@/lib/fetcher';
import { siteConfig } from '~/site.config';

const Github = () => {
  const { data } = useSWR('/api/github-stat', Fetcher);

  return (
    <>
      <CardMetric
        title="Github Followers"
        count={data?.followers}
        href={siteConfig.socials.Github}
      />
      <CardMetric
        title="Github Stars"
        count={data?.stars}
        href={siteConfig.socials.Github}
      />
    </>
  );
};

export default Github;
