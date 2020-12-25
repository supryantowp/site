import { FaDev } from 'react-icons/fa';
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

import { siteConfig } from '~/site.config';

export const useSocials = () => {
  const socials: [string, IconType][] = [
    [siteConfig.socials.Twitter, FiTwitter],
    [siteConfig.socials.Facebook, FiFacebook],
    [siteConfig.socials.Github, FiGithub],
    [siteConfig.socials.LinkedIn, FiLinkedin],
    [siteConfig.socials.Youtube, FiYoutube],
    [siteConfig.socials.DevTo, FaDev],
  ];

  return socials;
};
