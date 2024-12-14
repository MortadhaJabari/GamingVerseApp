import { Flex, VStack ,  FormControl, FormLabel,Input, Button, Heading,Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"


const Login = () =>{
  
    const [username,setUsername]  = useState('');
    const [password,setPassword]  = useState('');
    const navigate = useNavigate();
    const {auth_login} = useAuth();
    const handleNav = () =>{
      navigate('/register')
    }
    const handleLogin = () =>{
      auth_login(username,password)
  
    }
    return(
       
  
    <Flex w="100%" height="calc(90vh - 90px)" justifyContent="center" alignItems="center">
        <VStack  alignItems="start" w="95%" maxWidth="400px" gap="30px">
          <Heading color="white">Login Page</Heading>
          <FormControl w="95%" >
            <FormLabel color="white" htmlFor="username">Username</FormLabel>
            <Input onChange={(e)=>setUsername(e.target.value)}  w="100%" bg="white" type="text"  padding="6px"/>
          </FormControl>
          <FormControl w="95%">
            <FormLabel color="white" htmlFor="password">Password</FormLabel>
            <Input onChange={(e)=>setPassword(e.target.value)} w="100% "bg="white" type="password"  padding="6px"/>
          </FormControl>
          <VStack w="100%">
                <Button    
                onClick={handleLogin}  
                width="100%" border="none" 
                borderRadius="25px" height="35px" 
                color="white" 
                bgColor="#910A67" 
                padding="6px" 
                fontSize="18px"
                _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                transition="all 0.3s ease-in-out" >Login</Button>
                <Text color="white">Don't have an Account ? </Text>
                <Button    
                onClick={handleNav}  
                width="100%" border="none" 
                borderRadius="25px" height="35px" 
                color="white" 
                bgColor="#910A67" 
                padding="6px" 
                fontSize="18px"
                _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                transition="all 0.3s ease-in-out" >Register</Button>
            </VStack>
        </VStack>
    </Flex>
    
      
    )

}

export default Login