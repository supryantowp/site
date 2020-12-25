import { siteConfig } from './site.config';

export const defaultSeo = {
  title: siteConfig.title,
  titleTemplate: `%s • ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteConfig.url,
    title: siteConfig.title,
    site_name: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    handle: '@supryantowp',
    site: '@supryantowp',
    cardType: 'summary_large_image',
  },
};

export const socialProfile = {
  type: 'Person',
  name: 'supryantowp',
  url: siteConfig.url,
  sameAs: [
    siteConfig.socials.Github,
    siteConfig.socials.LinkedIn,
    siteConfig.socials.Twitter,
    siteConfig.socials.DevTo,
    siteConfig.socials.Youtube,
    siteConfig.socials.Facebook,
  ],
};
