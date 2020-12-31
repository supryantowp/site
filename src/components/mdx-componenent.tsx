import {
  chakra,
  Code,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import CodeBlock from '@/components/codeblock/codeblock';

const CustomLink = props => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <Link {...props} />
      </NextLink>
    );
  }

  return (
    <Link
      {...props}
      color={useColorModeValue('cyan.500', 'cyan.200')}
      isExternal
    />
  );
};

const CustomHeadingH1 = ({ children }) => (
  <Heading as="h1" fontSize="2xl">
    {children}
  </Heading>
);

const CustomHeadingH2 = ({ children }) => (
  <Heading as="h2" fontSize="xl">
    {children}
  </Heading>
);

const CustomHeadingH3 = ({ children }) => (
  <Heading as="h3" fontSize="lg">
    {children}
  </Heading>
);

const CustomHeadingH4 = ({ children }) => (
  <Heading as="h4" fontSize="md">
    {children}
  </Heading>
);

const CustomHeadingH5 = ({ children }) => (
  <Heading as="h5" fontSize="sm">
    {children}
  </Heading>
);

const CustomHeadingH6 = ({ children }) => (
  <Heading as="h6" fontSize="sm">
    {children}
  </Heading>
);

const InlineCode = (props: any) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue('cyan.500', 'cyan.200')}
    {...props}
  />
);

const MDXComponents = {
  Image,
  a: CustomLink,
  h1: CustomHeadingH1,
  h2: CustomHeadingH2,
  h3: CustomHeadingH3,
  h4: CustomHeadingH4,
  h5: CustomHeadingH5,
  h6: CustomHeadingH6,
  inlineCode: InlineCode,
  pre: props => <div {...props} />,
  code: Code,
};

export default MDXComponents;
