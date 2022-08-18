import React from 'react';
import { Box, Stack, Heading, Flex, Text, Icon, useDisclosure, Spacer } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding={6}
            justifyContent='center'
            transition={'all 0.2s ease-in-out'}
            backgroundColor={isOpen ? 'brand.800' : ''}
            color={isOpen ? 'brand.900' : 'brand.700'}
            {...props}
        >
            <Flex align='center' mr={5}>
                <Heading as='h1' fontSize='24px' letterSpacing={'tighter'}>
                    Gourmet
                </Heading>
            </Flex>

            <Spacer />

            <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
                <Icon as={isOpen ? CloseIcon : HamburgerIcon} w={isOpen ? '22px' : '30px'} h='auto' />
            </Box>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems='center'
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                spacing={4}
                justifyContent={'right'}
                fontWeight={600}
            >
                <Text>Home</Text>
                <Text>About</Text>
                <Text>News</Text>
                <Text>Contact</Text>
            </Stack>

            <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}></Box>
        </Flex>
    );
};

export default Header;
