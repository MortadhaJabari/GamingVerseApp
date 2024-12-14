import { Flex, VStack ,  FormControl, FormLabel,Input, Button, Heading ,Text} from "@chakra-ui/react"
import { register            } from "../api/endpoint"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () =>{
    const [username,setUsername]  = useState('');
    const [email,setEmail]  = useState('');
    const [firstName,setFirstName]  = useState('');
    const [lastName,setLastName]  = useState('');
    const [password,setPassword]  = useState('');
    const [confirmPassword,setConfirmPassword]  = useState('');
    const navigate = useNavigate();


    const handlenav = () =>{
        navigate('/login')
    }
    const handleRegister = async () =>{
        if (password === confirmPassword) {
            try{
                await register(username,email,firstName,lastName,password);
                alert('successfull registeration');
                navigate('/login');

            }catch{
                alert('error registering')

            }
            


        }else {
            alert("password and confirm password are not identical")
        }
    }
    return(
       
  
    <Flex w="100%" height="calc(100vh - 90px)" justifyContent="center" alignItems="center">
        <VStack  alignItems="start" w="95%" maxWidth="400px" gap="20px">
            <Heading color="white">Register Page</Heading>
            <FormControl w="95%" >
                <FormLabel color="white" htmlFor="username">Username</FormLabel>
                <Input onChange={(e)=>setUsername(e.target.value)}  w="100%" bg="white" type="text"  padding="6px"/>
            </FormControl>
            <FormControl w="95%" >
                <FormLabel color="white" htmlFor="email">Email</FormLabel>
                <Input onChange={(e)=>setEmail(e.target.value)}  w="100%" bg="white" type="email"  padding="6px"/>
            </FormControl>
            <FormControl w="95%" >
                <FormLabel color="white" htmlFor="firstname">First name</FormLabel>
                <Input onChange={(e)=>setFirstName(e.target.value)}  w="100%" bg="white" type="text"  padding="6px"/>
            </FormControl>
            <FormControl w="95%" >
                <FormLabel color="white" htmlFor="lastname">Last name</FormLabel>
                <Input onChange={(e)=>setLastName(e.target.value)}  w="100%" bg="white" type="text"  padding="6px"/>
            </FormControl>
            <FormControl w="95%">
                <FormLabel color="white" htmlFor="password">Password</FormLabel>
                <Input onChange={(e)=>setPassword(e.target.value)} w="100% "bg="white" type="password"  padding="6px"/>
            </FormControl>
            <FormControl w="95%">
                <FormLabel color="white" htmlFor="password">Confirm Password</FormLabel>
                <Input onChange={(e)=>setConfirmPassword(e.target.value)} w="100% "bg="white" type="password"  padding="6px"/>
            </FormControl>
            <VStack w="100%">
                <Button    
                onClick={handleRegister}  
                width="100%" border="none" 
                borderRadius="25px" height="35px" 
                color="white" 
                bgColor="#910A67" 
                padding="6px" 
                fontSize="18px"
                _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                transition="all 0.3s ease-in-out" >Register</Button>
                <Text color="white">Already have an Account ? </Text>
                <Button    
                onClick={handlenav}  
                width="100%" border="none" 
                borderRadius="25px" height="35px" 
                color="white" 
                bgColor="#910A67" 
                padding="6px" 
                fontSize="18px"
                _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                transition="all 0.3s ease-in-out" >Login</Button>
            </VStack>
        </VStack>
    </Flex>
    
      
    )

}

export default Register