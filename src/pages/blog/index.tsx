/* eslint-disable react/no-children-prop */
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { FaSearch } from 'react-icons/fa';

import ListBlog from '@/components/list/list-blog';
import TitleSeperator from '@/components/title-seperator';

const metaTags = {
  title: 'Blog',
  description: `I&apos;ve been writing online since 2014, mostly about web development
          and tech careers. In total, I&apos;ve written 64 articles on this
          site. Use the search below to filter by title.`,
};

const Blog = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <NextSeo {...metaTags} />
      <TitleSeperator {...metaTags} />
      <InputGroup>
        <Input placeholder="Search article" />
        <InputRightElement children={<Icon color="gray.500" as={FaSearch} />} />
      </InputGroup>
      <ListBlog />
    </Stack>
  );
};

export default Blog;
