import React from 'react'
import {Button,Stack,Flex,Box,Select,Heading} from '@chakra-ui/react'

const Nqs = () => {
  return (
    
    <Flex h='100vh'
    align='center'
    justify='center'
    bgGradient='linear(to-b,blue.400,pink.400)'>  
      <Stack spacing='8' >
        <Stack align='center'>
            

            
            <Box rounded={'15'} bgGradient='linear(to-tl,green.300,pink.300)' p='8'>
          <Stack fontWeight={'600'} color='red.900' spacing='4'>
                <Heading fontSize={'20'} align='center'>STORE DATA</Heading>
                
            <Select w={300} placeholder='View Inventory'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
            </Select>
        
            <Select placeholder='Add Inventory'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
            </Select>
            
            <Select placeholder='Search Inventory'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
                 <option value='option3'>Option 3</option>
            </Select>
           
              
            </Stack>
             </Box>
        </Stack>
        </Stack>
        

 </Flex>
    
  )
}

export default Nqs