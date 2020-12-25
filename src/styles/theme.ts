import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    body: 'Play',
    heading: 'Inter',
  },
  colors: {
    cyan: {
      50: '#d9ffff',
      100: '#acfdfe',
      200: '#7efbfb',
      300: '#4ef8f7',
      400: '#23f6f5',
      500: '#09dddc',
      600: '#00acab',
      700: '#007c7b',
      800: '#004b4a',
      900: '#001b1a',
    },
    gray: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
  },
  components: {
    Heading: {
      variants: {
        link: {
          _groupHover: {
            color: 'cyan.300',
            textDecor: 'underline',
          },
        },
      },
    },
  },
});
