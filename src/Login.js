import React,{useState} from 'react'

import {Flex, Box, FormControl, FormLabel, Input,HStack,InputGroup,InputLeftElement, Checkbox, Stack,Button,Heading, Text,Img } from '@chakra-ui/react'
import {MdOutlineMail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {Link, useNavigate} from 'react-router-dom';
export default function SimpleCard() {
  const [email,setEmail]=useState('');
const navigate=useNavigate()
const [password,setpassword]=useState('');

const authenticate=()=>{
console.log('function called')
if(email  ==='silverlightindia' && password ==='silver@123'){

navigate('/auth')



}
else{

alert('incorrect email or password')


}

}

  return (
    <Flex
    
      h='100vh'
      align='center'
      justify='center'
      bgGradient='linear(to-b,green.400,pink.400)'>
      <Stack spacing='8' >
        <Stack align='center'>
            
          <Heading fontSize='45' fontWeight={'700'} color={'whiteAlpha.700'}>Admin Login</Heading>
         
        </Stack>
        <Box rounded={'15'} bgGradient='linear(to-tl,green.300,pink.300)' p='8'>
          <Stack fontWeight={'600'} color='red.900' spacing='4'>
            <FormControl id="email">
              <FormLabel>Username </FormLabel>
              <InputGroup>
                <InputLeftElement>
                < MdOutlineMail color='gray' size={'20'}/>
                </InputLeftElement>
              <Input color='white' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'  />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                < RiLockPasswordFill color='gray' size={'20'}/>
                </InputLeftElement>
              <Input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <HStack spacing={'9'} >
                <Checkbox>Remember me</Checkbox>
                <Text color={'yellow.100'}>Forgot password?</Text>
              </HStack>

              
              <Button bg={'pink.500'} fontWeight={'900'}
            onClick={authenticate}
              fontSize={'20'} color='white'>Login
              </Button>
              
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}