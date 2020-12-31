/* eslint-disable react/no-children-prop */
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import ListBlog from '@/components/list/list-blog';
import TitleSeperator from '@/components/title-seperator';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const metaTags = {
  title: 'Blog',
  description: `I&apos;ve been writing online since 2014, mostly about web development
          and tech careers. In total, I&apos;ve written 64 articles on this
          site. Use the search below to filter by title.`,
};

const Blog = ({ posts }) => {
  console.log({ posts });
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(frontMatter =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <NextSeo {...metaTags} />
      <TitleSeperator {...metaTags} />
      <InputGroup>
        <Input placeholder="Search article" />
        <InputRightElement children={<Icon color="gray.500" as={FaSearch} />} />
      </InputGroup>

      {filteredBlogPosts.map(frontMatter => (
        <ListBlog key={frontMatter.title} {...frontMatter} />
      ))}
    </Stack>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
