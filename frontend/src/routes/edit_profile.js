import { Button, Flex, FormControl, FormLabel, Heading, VStack,Input, Textarea ,Select } from "@chakra-ui/react";
import { useState } from "react";
import { logout, update_user } from "../api/endpoint";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    const storage = JSON.parse(localStorage.getItem('userData'))
    const [username,setUsername] = useState(storage ? storage.username : '')
    const [email,setEmail] = useState(storage ? storage.email : '')
    const [lastName,setLastName] = useState(storage ? storage.last_name : '')
    const [firstName,setFirstName] = useState(storage ? storage.first_name : '')
    const [bio,setBio] = useState(storage ? storage.bio : '')
    const [profileImage,setProfileImage] = useState(storage ? storage.profile_image : '')
    const [favouriteGame,setFavouriteGames] = useState(storage ? storage.favourite_game : [])
    const [birthdate,setBirthdate] = useState(storage? storage.birthdate : '') 

    const nav = useNavigate()

    const handleUpdate= async() => {
        try {
            await update_user({"username" : username ,"profile_image" : profileImage , "email" : email , "first_name" : firstName ,"last_name" : lastName , "bio" : bio ,"favourite_game" : favouriteGame , "birthdate" : birthdate })
            localStorage.setItem("userData",JSON.stringify({"username" : username , "email" : email , "first_name" : firstName ,"last_name" : lastName , "bio" : bio ,"favourite_game" : favouriteGame , "birthdate" : birthdate}))
            alert('success updating')
        } catch {
            alert('error updating details')
        }
        
    }
    const handleLogout = async() => {
        try{
                await logout();
                nav('/')
        }catch{
                alert('error logging out')
        }
    }

    return(
        <Flex w="100%" justifyContent='center' pt="50px">
            <VStack w="95%" maxW="500px" alignItems="start" gap="20px">
                <Heading color="white">Edit Profile</Heading>
                <VStack color="white" w="100%" alignItems="start" gap="20px">
                    <FormControl width="100%" >
                        <FormLabel>Profile Picture</FormLabel>
                        <Input onChange={(e)=> setProfileImage(e.target.files[0])} width="100%"  type='file'/>
                    </FormControl>
                    <FormControl width="100%" >
                        <FormLabel>Username</FormLabel>
                        <Input onChange={(e)=> setUsername(e.target.value)} value={ username } width="100%" type='text'/>
                    </FormControl>
                    <FormControl width="100%" >
                        <FormLabel>Email</FormLabel>
                        <Input onChange={(e)=> setEmail(e.target.value)} value={ email } width="100%"  type='email'/>
                    </FormControl>
                    <FormControl width="100%" >
                        <FormLabel>First Name</FormLabel>
                        <Input onChange={(e)=> setFirstName(e.target.value)} value={ firstName } width="100%"  type='text'/>
                    </FormControl>
                    <FormControl width="100%" >
                        <FormLabel>Last Name</FormLabel>
                        <Input onChange={(e)=> setLastName(e.target.value)} value={ lastName } width="100%"  type='text'/>
                    </FormControl>
                    <FormControl width="100%" >
                        <FormLabel>Bio</FormLabel>
                        <Textarea  onChange={(e)=> setBio(e.target.value)} value={ bio } width="100%" type='text'/>
                    </FormControl>
                    <FormControl width="100%">
                        <FormLabel>Favorite Game</FormLabel>
                        <Select onChange={(e) => setFavouriteGames(e.target.value)} value={favouriteGame} width="100%">
                            <option value="valorant">Valorant</option>
                            <option value="league_of_legends">League of Legends</option>
                            <option value="fortnite">Fortnite</option>
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                    <FormControl width="100%">
                        <FormLabel>Birthdate</FormLabel>
                        <Input onChange={(e) => setBirthdate(e.target.value)} value={birthdate} width="100%" type="date" />
                    </FormControl>
                    <Button 
                        onClick={handleUpdate}
                        width="30%" border="none" 
                        borderRadius="25px" height="35px" 
                        color="white" 
                        bgColor="#910A67" 
                        padding="6px" 
                        fontSize="18px"
                        _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                        transition="all 0.3s ease-in-out">Save Changes</Button>

                </VStack>
                <Button 
                        onClick={handleLogout}
                        width="30%" border="none" 
                        borderRadius="25px" height="35px" 
                        color="white" 
                        bgColor="#910A67" 
                        padding="6px" 
                        fontSize="18px"
                        _hover={{ bg: "#910A97" ,transform: "scale(1.1)", boxShadow: "lg" }} 
                        transition="all 0.3s ease-in-out">Logout</Button>
            </VStack>
        </Flex>
    )
}

export default EditProfile ;