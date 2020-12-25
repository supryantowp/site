/* eslint-disable react/no-children-prop */
import {
  Box,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

import ListBlog from '@/components/list/list-blog';

const Blog = () => {
  return (
    <Stack py={8} px={{ base: 5, md: 40 }} maxW="1000px" mx="auto" spacing={10}>
      <Box>
        <Heading>Blog</Heading>
        <Text mt={2} color="gray.500">
          I&apos;ve been writing online since 2014, mostly about web development
          and tech careers. In total, I&apos;ve written 64 articles on this
          site. Use the search below to filter by title.
        </Text>
      </Box>
      <InputGroup>
        <Input placeholder="Search article" />
        <InputRightElement children={<Icon color="gray.500" as={FaSearch} />} />
      </InputGroup>

      <ListBlog />
    </Stack>
  );
};

export default Blog;
