import { HStack, Icon, IconButton, Stack } from '@chakra-ui/react';

import { useSocials } from '@/hooks/app';

import CardNowPlaying from './card-now-playing';

const Footer = () => {
  const socials = useSocials();

  return (
    <Stack align="center" py={10} spacing={8}>
      <CardNowPlaying />

      <HStack spacing={0}>
        {socials.map(([href, IconType]) => (
          <IconButton
            as="a"
            key={href}
            variant="link"
            target="_blank"
            href={href}
            color="gray.500"
            aria-label="github"
            icon={<Icon as={IconType} boxSize={5} />}
          />
        ))}
      </HStack>
      <HStack></HStack>
    </Stack>
  );
};

export default Footer;
