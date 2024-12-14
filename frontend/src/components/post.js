import { VStack, Text, HStack, Flex, Button, Box, Image } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { toggle_like } from "../api/endpoint";
import { SERVER_URL } from "./constants/constants";
import { useNavigate } from "react-router-dom";

const Post = ({ id, username, description, formated_date, liked, like_count, image,video, media_type }) => {
    const [clientLiked, setClientLiked] = useState(liked);
    const [clientLikeCount, setClientLikeCount] = useState(like_count);
    const nav = useNavigate()

    const handleNavigate = (route) => {
        nav(`/${route}`);
      };

    const handleToggleLike = async () => {
        const data = await toggle_like(id);
        if (data.now_liked) {
            setClientLiked(true);
            setClientLikeCount(clientLikeCount + 1);
        } else {
            setClientLiked(false);
            setClientLikeCount(clientLikeCount - 1);
        }
    };

    return (
        <VStack color='white' w='600px' h='auto' border='1px solid' borderColor='gray.400' borderRadius='8px' gap="0">
            {/* Header Section */}
            <HStack w='90%' flex='1' borderBottom='1px solid' borderColor='gray.300' p='0 30px' bg='white' borderRadius='8px 8px 0 0'>
                <Text onClick={()=>handleNavigate(username)}color='black'>@{username}</Text>
            </HStack>
            
            {/* Description Section */}
            <Flex  bg = "white" flex='2' w='100%' justifyContent='center' alignItems='center' borderColor="black" borderTop="1px solid">
                <Text  color="black" textAlign='center'>{description}</Text>
            </Flex>

            {/* Media Section: Image or Video */}
            <Flex flex='6' w='100%' h='auto' justifyContent='center' alignItems='center'>
                {media_type === 'image' ? (
                    <Image src={`${SERVER_URL}${image}`}  alt='Post Media' boxSize='100%' objectFit='cover'  />
                ) : media_type === 'video' ? (
                    <Box w='100%' h='auto'>
                        <video controls width="100%" height="auto">
                            <source src={`${SERVER_URL}${video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                ) : null}
            </Flex>


            {/* Footer Section: Like Button, Like Count, Date */}
            <Flex flex='2' w='100%' justifyContent='center' alignItems='center' borderTop='1px solid' bg='white' borderColor='gray.400' borderRadius='0 0 8px 8px'>
                <HStack w='90%' justifyContent='space-between'>
                    <HStack>
                        <Box>
                            {clientLiked ? (
                                <FaHeart size='20px' color='red' onClick={handleToggleLike} />
                            ) : (
                                <FaRegHeart size='20px' color='red' onClick={handleToggleLike} />
                            )}
                        </Box>
                        <Text color='black'>{clientLikeCount}</Text>
                    </HStack>
                    <Text color='black'>{formated_date}</Text>
                </HStack>
            </Flex>
        </VStack>
    );
};

export default Post;
