import { Flex, FormLabel, Heading, VStack ,Input, FormControl,Button,Select} from "@chakra-ui/react";
import { create_post } from "../api/endpoint";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const CreatePost = () =>{
    const navigate = useNavigate()
    const [description , setDescription] = useState('');
    const [image,setImage] = useState('')
    const [video,setVideo] = useState('')
    const [mediaType,setMediaType] = useState('')


    const handle_post = async () =>{
        try {
            const response = await create_post(description,mediaType,image,video)
            navigate(`/${response.username}`)
            
        } catch (error) {
            alert('error creating post');
            
        }
    }
    return(
        <Flex w='100%' h="100%" justifyContent='center' pb="15px" pt="15px">
            <VStack w='95%' maxW="450px" alignItems="start" gap="30px">
                <Heading color="white">Create Post</Heading>
                <FormControl width="100%">
                        <FormLabel color="white" >Post Type</FormLabel>
                        <Select color="white" onChange={(e) => setMediaType(e.target.value)} value={mediaType} width="100%">
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </Select>
                    </FormControl>
                <FormControl width="100%" >
                    <FormLabel color="white" >Image</FormLabel>
                    <Input color="white" onChange={(e)=> setImage(e.target.files[0])} width="100%"  type='file'/>
                </FormControl>
                <FormControl width="100%" >
                    <FormLabel color="white">Video</FormLabel>
                    <Input color="white" onChange={(e)=> setVideo(e.target.files[0])} width="100%"  type='file'/>
                </FormControl>
                <FormControl w="100%">
                    <FormLabel color="white">Description</FormLabel>
                    <Input  onChange={(e) => setDescription(e.target.value)} w="100%" h="200px" type="text"/>
                </FormControl>
                <Button  
                onClick={handle_post}    
                width="100%" border="none" 
                borderRadius="25px" height="35px" 
                color="white" 
                bgColor="#910A67" 
                padding="6px" 
                fontSize="18px"
                _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                transition="all 0.3s ease-in-out" >Create</Button>
            </VStack>
        </Flex>
    )
}

export default  CreatePost;