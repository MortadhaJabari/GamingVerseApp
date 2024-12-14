import {Box, Button, Flex, HStack, Heading, Image, Spacer, Text, VStack} from '@chakra-ui/react' ;
import { useEffect ,useState } from 'react';
import { get_user_profile_data, toggle_follow ,get_users_posts} from '../api/endpoint';
import { SERVER_URL } from '../components/constants/constants';
import Post from '../components/post';
import { useNavigate } from 'react-router-dom';
const UserProfile = () =>{

    const get_username_from_url = ()=>{
        const url_split = window.location.pathname.split('/');
        return url_split[url_split.lenght=1]
    }

    const [username , setUsername] = useState(get_username_from_url()) 

    useEffect(()=>{
        setUsername(get_username_from_url())
    },[])

    return(
        <Flex w='100%' justifyContent='center'>
            <VStack w='75%'>
                <Box w='100%' mt='40px'>
                    <UserDetail username={username}/>
                </Box>
                <Box w='100%' mt='50px'>
                    <UserPosts username={username}/>
                </Box>
            </VStack>
        </Flex>
    )

}
const UserDetail = ({username}) =>{

    const [loading,setLoading] = useState(true)
    const [bio,setBio] = useState('')
    const [profileImage , setProfileImage] =  useState('')
    const [followingCount,setFollowingCount]  = useState(0)
    const [followerCount,setFollowerCount] = useState(0)
    const [isOurProfile,setIsOurProfile] = useState(false)
    const [following,setFollowing] = useState(false)
    const [favouriteGame,setFavouriteGame] = useState([])

    const nav = useNavigate();

    const handle_toggle_follow = async () =>{
        const data = await toggle_follow(username);
        if (data.now_following) {
            setFollowerCount(followerCount+1);
            setFollowing(true)

        } else {
            setFollowerCount(followerCount-1)
            setFollowing(false)
        }
    }

    useEffect(()=>{

      


        const fetchData = async () =>{
            try {
                const data = await get_user_profile_data(username);
                setBio(data.bio)
                setProfileImage(data.profile_image) 
                setFollowerCount(data.follower_count)
                setFollowingCount(data.following_count)
                setIsOurProfile(data.is_our_profile)
                setFollowing(data.following)
                setFavouriteGame(data.favourite_game)
            } catch(e){  
                console.log(e)

            } finally {
                setLoading(false)
            }

            
        }
        fetchData() ;

    },[])
    return (
        <VStack w='100%' alignItems='start' gap='40px'>
            <Heading color='white'>@{username}</Heading>
            <HStack gap='20px'>
                <Box boxSize="150px" border="2px solid" borderColor="grey.700" bg="white" borderRadius="150px" overflow='hidden'>
                    <Image src={loading? '' :`${SERVER_URL}${profileImage}`} boxSize='100%' objectFit='cover' />
                </Box>
                <VStack>
                    <HStack color='white' gap="20px">
                        <VStack>
                            <Text>Followers</Text>
                            <Text>{loading? '-' :followerCount}</Text>
                        </VStack>
                        <VStack>
                            <Text>Following</Text>
                            <Text>{loading? '-' :followingCount}</Text>
                        </VStack>
                    </HStack>
                    {   
                        loading?
                        <Spacer/>
                        :
                            isOurProfile ?
                            <Button onClick={()=> nav('/edit-profile')}w='100%' h="40px" fontWeight='bold' border = "none"borderRadius="25px" _hover={{ bg: "#D4BEE4" }}   >Edit Profile</Button>

                            :
                            <Button onClick={handle_toggle_follow} w='100%' h="40px" fontWeight='bold' border = "none"borderRadius="25px" _hover={{ bg: "#D4BEE4" }}   >{following ? 'Unfollow' : 'Follow'}</Button>


                    }
                    
                </VStack>
            </HStack>
            <VStack>
                <Text color='white'>{loading? '-' : bio}</Text>
                <Text color="white">Favourite Game : <Button border="none" 
                    
                    color="white" 
                    bgColor="#910A67" 
                    padding="6px" 
                    fontSize="12px">{loading? '-' : favouriteGame}</Button></Text>
            </VStack>
            
        
        </VStack>
    )
}

const UserPosts = ({username}) => {
    

    const [posts , setPosts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const posts =  await get_users_posts(username)
                setPosts(posts)

            }catch{
                alert('error getting users posts')
            }finally{
                setLoading(false)

            }
        }
        fetchData()
    },[])
    
    return (
        <Flex w='100%' wrap='wrap' gap='30px' pd='50px'>
            { loading ?
                <Text>Loading</Text>
            :
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
            }
           
        </Flex>

    )
} 




export default UserProfile ;