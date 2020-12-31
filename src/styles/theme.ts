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
