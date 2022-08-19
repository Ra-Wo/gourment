import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '../styles/fonts.css';

const colors = {
    brand: {
        900: '#06283D',
        800: '#AED9EA',
        700: '#DFF6FF',
    },
};

const fonts = {
    heading: 'Nunito-Extrabold',
    body: 'Nunito-light',

};

const components = {
    Button: {
      baseStyle: {
        fontFamily: 'Nunito-medium',
      }
    }
}

const theme = extendTheme({ colors, fonts, components });

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
