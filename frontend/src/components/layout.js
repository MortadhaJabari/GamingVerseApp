import {  Text,VStack ,Box, HStack} from "@chakra-ui/react";
import Navbar from "./navbar";

export const Layout1 = ({children}) =>{
  return (
    <VStack width="100vw" minH="100vh"bgColor="#030637"position="relative">
      <Navbar />
        <HStack w="100%">     
          <Box width="100%" display="flex" justifyContent="flex-start" paddingLeft="0">{children}</Box>
          <Box width="100%" height="90vh" backgroundImage="url('/homepage-image2.png')" backgroundSize="cover"backgroundPosition="center"/>
        </HStack>
    </VStack>
  )
}

export const Layout2 = ({children}) =>{
  return (
  <VStack width="100vw" minH="100vh" bgColor="#030637" position="relative">
    <Navbar />
    <HStack w="100%">
      <Box width="100%"  height="90vh"  backgroundImage="url('/homepage-image2.png')"   backgroundSize="cover" backgroundPosition="center"/>
      <Box  width="100%" display="flex" justifyContent="flex-start"  paddingLeft="0">{children}</Box>
    </HStack>
  </VStack>
  )
}

export const Layout3 = ({children}) =>{
  return (
    
  <VStack width="100vw" minH="100vh" bgColor="#030637"  position="relative">
    <Navbar />
    <Box  width="100%" display="flex" justifyContent="flex-start"  paddingLeft="0" >{children}</Box>
  </VStack>
     
  )
}



