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
    Text: 'Nunito-regular',
    body: 'Nunito-light',
    button: 'Nunito-regular',
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
