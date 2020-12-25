import { NextApiRequest, NextApiResponse } from 'next';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const statResponse = await fetch(
    'https://wakatime.com/api/v1/users/supryantowp/stats/last_7_days'
  );

  const stat = await statResponse.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    dailyCoding:
      stat.data.human_readable_daily_average_including_other_language,
    primaryLanguage: {
      name: stat.data.languages[0].name,
      text: stat.data.languages[0].text,
    },
  });
};
