import { Box, Container, Text, Stack, Image, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../componenets/header/Header';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function Home() {
    return (
        <Box bgGradient='linear(to-r, #07314A, #051E2E)' minH='100vh' overflowY='hidden'>
            <Head>
                <title>Gourmet</title>
                <meta name='description' content='Gourmet' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Container maxW={{ base: 'container.xl' }} px={10}>
                <Box position={'relative'} top='10%' w='100%' overflow='hidden'>
                    <Text
                        w='100%'
                        whiteSpace='pre'
                        opacity={0.03}
                        color='brand.700'
                        fontFamily='Nunito-Extrabold'
                        fontSize={{ base: '200px', md: '280px' }}
                        height={'400px'}
                    >
                        Gourmet
                    </Text>
                </Box>
                <Stack
                    mt='-400px'
                    minH='80vh'
                    justifyContent='center'
                    direction={{ base: 'column-reverse', md: 'row' }}
                    alignItems='center'
                    pb={{ base: '20px' }}
                >
                    <Box w='full'>
                        <Heading fontSize={{ base: '40px', md: '60px', xl: '80px' }} color='brand.700' lineHeight={1.18}>
                            We know the best spots just for you!
                        </Heading>
                        <Stack w={{ base: 'full', md: '70%' }} fontSize='20px'>
                            <Text color='brand.800'>
                                Gourmet is an app that helps you find only the
                                <Text as='span' color='brand.700'>
                                    {' '}
                                    finest restaurants near your location.
                                </Text>{' '}
                                Finding a place to eat has never been easier!
                            </Text>
                        </Stack>
                        <ButtonGroup gap='4' mt={6} flexWrap={'wrap'}>
                            <Button bg='brand.700' color='brand.900' colorScheme='whiteAlpha' px={{ base: 6, md: 9 }}>
                                Find restaurants
                            </Button>
                            <Button colorScheme='blackAlpha' color='brand.700' bg='#083B4F' px={9}>
                                Learn More
                            </Button>
                        </ButtonGroup>
                    </Box>

                    <Box w='full' overflow='hidden'>
                        <Image src='/Images/restaurants.png' alt='restaurant' rounded='md' />
                        <Stack direction='row' display={{ base: 'none', md: 'flex' }}>
                            <Image src='/Images/icon-x.svg' alt='icon' w='150px' />
                            <Image opacity={0.2} src='/Images/icon-x.svg' alt='icon' w='150px' />
                            <Image src='/Images/icon-x.svg' alt='icon' w='150px' />
                            <Image opacity={0.2} src='/Images/icon-x.svg' alt='icon' w='150px' />
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
