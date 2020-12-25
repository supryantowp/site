import useSWR from 'swr';

import CardMetric from '@/components/card-metric';
import { siteConfig } from '~/site.config';

const Youtube = () => {
  const { data } = useSWR('/api/youtube-stat');

  return (
    <>
      <CardMetric
        title="Youtube Subcriber"
        count={data?.subscriberCount}
        href={siteConfig.socials.Youtube}
      />
      <CardMetric
        title="Youtube Viewer"
        count={data?.viewCount}
        href={siteConfig.socials.Youtube}
      />
    </>
  );
};

export default Youtube;
