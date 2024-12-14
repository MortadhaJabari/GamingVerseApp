import { Flex, HStack, Text, Box } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";
import { SiLibreofficewriter } from "react-icons/si";
import { useAuth } from "../context/useAuth";
import { logout } from "../api/endpoint";


const Navbar = () => {
    const { auth } = useAuth();
    const nav = useNavigate();
  
    const handleNavigate = (route) => {
      nav(`/${route}`);
    };
  
    const handleNavigateUser = () => {
      const username = JSON.parse(localStorage.getItem("userData"))["username"];
      nav(`/${username}`);
      window.location.reload();
    };
  
    const handleLogout = async () => {
      try {
        await logout();
        window.location =  "/";
      } catch {
        alert("Error logging out");
      }
    };

   
    
  
    const NavItem = ({ icon, label, onClick }) => (
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={onClick}
          role="group"
          transition="all 1s ease"
          position="relative"
          paddingRight={"15px"}
          _hover={{
            marginRight: "0px", // Add space dynamically when hovered
          }}
        >
          {/* Icon */}
          <Box>
            {icon}
          </Box>
      
          {/* Text Label */}
          <Text
             minW="0" // Ensure no minimum width when not hovered
             maxW="0" // Initial max-width is 0 to hide text
            fontSize="14px"
            fontWeight="bold"
            ml="10px" // Margin to separate text from the icon
            whiteSpace="nowrap"
            opacity={0}
            visibility="hidden"
            transform="translateX(-10px)"
            _groupHover={{
              textAlign : "center" ,
              minW: "50px", // Ensure enough space for shorter labels
              maxW: "70px", // Dynamically adjust to longer labels
              opacity: 1,
              visibility: "visible",
              transform: "translateX(0)",
            }}
            transition="all 1s ease"
          >
            {label}
          </Text>
        </Flex>
      );
      
      
      
      
    return (
      <Flex w="100vw" h="50px" bgColor="#910A67" justifyContent="center" alignItems="center">
        <HStack justifyContent="space-between" w="90%" color="white">
          <Text fontSize="24px" fontWeight="bold" onClick={() => handleNavigate("")}>
            GamingVerse
          </Text>
          <HStack>
            {auth ? (
              <>
                <NavItem
                  icon={<CgProfile size="24px" />}
                  label="Profile"
                  onClick={handleNavigateUser}
                />
                <NavItem
                  icon={<IoMdAddCircleOutline size="26px" />}
                  label="Create Post"
                  onClick={() => handleNavigate("create-post")}
                />
                <NavItem
                  icon={<FaHouse size="24px" />}
                  label="Home"
                  onClick={() => handleNavigate("")}
                />
                <NavItem
                  icon={<MdRssFeed size="24px" />}
                  label="Feed"
                  onClick={() => handleNavigate("feed")}
                />
                <NavItem
                  icon={<FaSearch size="24px" />}
                  label="Search"
                  onClick={() => handleNavigate("search")}
                />
                <NavItem
                  icon={<IoLogOut size="24px" />}
                  label="Logout"
                  onClick={handleLogout}
                />
              </>
            ) : (
              <>
                <NavItem
                  icon={<FaHouse size="24px" />}
                  label="Home"
                  onClick={() => handleNavigate("")}
                />
                <NavItem
                  icon={<RiLoginBoxFill size="24px" />}
                  label="Login"
                  onClick={() => handleNavigate("login")}
                />
                <NavItem
                  icon={<SiLibreofficewriter size="24px" />}
                  label="Register"
                  onClick={() => handleNavigate("register")}
                />
              </>
            )}
          </HStack>
        </HStack>
      </Flex>
    );
  };
  
 
  

export default Navbar;
