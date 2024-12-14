import { Flex, Button ,Heading, VStack ,Text} from "@chakra-ui/react";
import Post from "../components/post";
import { useState ,useEffect} from "react";
import { get_posts } from "../api/endpoint";

const Feed = () => {

    const  [posts ,setPosts]  = useState([]);
    const [loading,setLoading] = useState(true);
    const [nextpage,setNextPage] = useState(1);

    const fetchData = async ()=>{
        const data = await  get_posts(nextpage);
        setPosts([...posts, ...data.results]);
        setNextPage(data.next ? nextpage+1 : null);
    } 

    useEffect(()=>{
        try {
           
            fetchData()

            
        } catch  {
            alert('error getting posts')
            
        }finally{
            setLoading(false)
        }
    },[])

    const loadMorePosts = () =>{
        if (nextpage) {
            fetchData()
        }
    }
    return (
        <Flex w='100%' justifyContent='center' pt="50px">
            <VStack alignItems="start" gap="25px" pb="50px">
                <Heading alignSelf="center" color="white">Posts</Heading>
                {
                    loading?
                    <Text>Loading</Text>
                    :
                        posts?
                        posts.map((post) => {
                            return <Post key={post.id}
                            id = {post.id}
                            username = {post.username}
                            description= {post.description} 
                            formated_date = {post.formated_date}
                            like_count = {post.like_count}
                            liked={post.liked}
                            media_type={post.media_type}
                            image={post.image} 
                            video={post.video}/>
                        })

                        :
                        <></>
                }
                {
                nextpage && !loading && (
                    <Button    
                    onClick={loadMorePosts}  
                    width="100%" border="none" 
                    borderRadius="25px" height="35px" 
                    color="white" 
                    bgColor="#910A67" 
                    padding="6px" 
                    fontSize="18px"
                    _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                    transition="all 0.3s ease-in-out" >Load More</Button>
                      
                    )
                }
            </VStack>
        </Flex>
    )

}
export default Feed;