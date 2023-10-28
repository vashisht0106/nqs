import React from 'react'
import {Flex,Heading,Box,Stack, HStack,Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom' 


const Home = () => {
  return (
    
        <Flex  h='100vh'
        
        justify='center'
            bgGradient='linear(to-b,red.400,blue.400)'>
                <Stack spacing='8' >
        <Stack align='center'>
            <Box rounded={16} w={'100%'}  bg={'blue.700'} align='center' justifyContent={'center'}>

            <Heading fontSize='90' fontWeight={'700'} color={'whiteAlpha.700'}>NAMOH QUALITY SOLUTION</Heading>
            <HStack align={'center'} fontSize={'24'} fontWeight={'600'} color={'yellow.500'} justify={'center'} bg={'red.500'}>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/store">Store</a>
            <a href="/contactus">Contactus</a>
        
           
            </HStack>
            </Box>
            </Stack>
            </Stack>
     

        </Flex>
    
  )
}

export default Home