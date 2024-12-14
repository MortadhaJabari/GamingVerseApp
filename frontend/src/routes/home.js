import React from 'react';
import { Box, Heading, Text, Button, Flex, Grid, GridItem, Image ,HStack} from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';



const Home = () =>{
    const navigate = useNavigate();
    return(
    <Flex w="100%" height="calc(90vh - 90px)" justifyContent="center" alignItems="center" pt="15px" pb="15px">
    <Box color='white'>

      <Flex direction="column" bg="gray.100" py={16} px={8} textAlign="center" gap="30px">
        <Heading as="h1" size="2xl" mb={4}>Welcome to Gaming Verse</Heading>
        <Text fontSize="lg" mb={8}>
          A community for gamers to share clips, tactics, and team up for competitions!
        </Text>
        <Button    
                onClick={() => navigate("/login")}
                width="15%" border="none" 
                borderRadius="25px" height="35px" alignSelf="center"
                color="white" 
                bgColor="#910A67" 
                padding="6px" 
                fontSize="18px"
                _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} transition="all 0.3s ease-in-out" >Get Started</Button>
      </Flex>

      {/* Content Cards */}
      <Box py={12} px={8}>
        <Heading size="lg" mb={8} textAlign="center">Explore Top Features</Heading>
          <HStack w="100%" spacing={6} wrap="wrap" justify="center" gap="40px">
            <Flex _hover={{ transform: "scale(1.1)", boxShadow: "lg" }} transition="all 0.3s ease-in-out" direction="column"  boxShadow="md" borderRadius="md" p={6} textAlign="center" align="center" w="100%" maxW="350px">
              <Image w="100%" src="game_highlight.jpg" alt="Clips" borderRadius="md" mb={4} />
              <Heading size="md" mb={2}>Share Clips</Heading>
              <Text >Showcase your gaming highlights with the community.</Text>
            </Flex>
            <Flex _hover={{ transform: "scale(1.1)", boxShadow: "lg" }} transition="all 0.3s ease-in-out" direction="column"  boxShadow="md" borderRadius="md" p={6} textAlign="center" align="center" w="100%" maxW="350px">
              <Image w="100%" src="strategy.jpg" alt="Tactics" borderRadius="md" mb={4} />
              <Heading size="md" mb={2}>Learn Tactics</Heading>
              <Text >Discover and share game-winning strategies.</Text>
            </Flex>
            <Flex _hover={{ transform: "scale(1.1)", boxShadow: "lg" }} transition="all 0.3s ease-in-out" direction="column"  boxShadow="md" borderRadius="md" p={6} textAlign="center" align="center" w="100%" maxW="350px">
              <Image  w="100%" src="community.jpg" alt="Team Up" borderRadius="md" mb={4} />
              <Heading size="md" mb={2}>Team Up</Heading>
              <Text >Find teammates and form your dream team.</Text>
            </Flex>
          </HStack>
      </Box>      
    </Box>

    </Flex>
    
    )
}

export default Home;