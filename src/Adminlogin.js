import {useState} from 'react'
import React from 'react'
import {Center,VStack,Box,Text,HStack,Input, InputGroup, InputRightElement, Stack,Checkbox,Button, Flex} from '@chakra-ui/react'
import {MdOutlineMail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';

const Adminlogin = () => {
  const [email,setEmail]=useState("")

const [password,setPassword]=useState('')

  return (
      
        <Box  bg={'blue.600'} w={'100%'} h={'100vh'} >
        
                   
                 <Center  >
                <Text   fontSize={'25'} ><b>Admin</b> Panel</Text>
                  </Center>  
                   <Center  h={'100vh'}>
                    <Box p={'4'} w={400} h={250} bg={'white'} boxShadow={'md'}>
                        
                <VStack >
<Center fontSize={'14'} w={'100%'}>
                        <Text>Sing in to start your session</Text>

</Center>

       <HStack  >
                
          <Stack  pt={'4'}>
                    <InputGroup>
                        <Input w={350} type='email' onChange={(e)=>setEmail(e.target.value)}  placeholder='Email'  fontSize={'15'} />
                       <InputRightElement>
                         < MdOutlineMail color='gray' size={'20'}/>
                       </InputRightElement>
                     </InputGroup>
             </Stack>
        </HStack>
            <Stack>
                    <InputGroup>
                      <Input w={350} type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' fontSize={'15'} />
                  <InputRightElement>
                      <RiLockPasswordFill color='gray' size={'20'}/>
             
                  </InputRightElement>
                  </InputGroup>

             </Stack>

         <HStack  p={'6'} spacing={100}>
             <Checkbox  borderColor={'black.100'}  >Remember me</Checkbox>
             
          <Button w={'15'} bg={'blue.400'} color={'white'}   borderRadius={0} boxShadow={'md'}>Sign in</Button>
             
            
         </HStack>
                       
                </VStack>
                    </Box>
                    </Center> 
                
          
        </Box>
        
    
  )
}

export default Adminlogin