import { FC } from "react";
import Search from "./search";
import { Avatar, Box, Heading, Icon } from "@chakra-ui/react";
import {MdOutlineAddBox} from 'react-icons/md';
import {BsCameraVideo} from 'react-icons/bs'

interface NavbarProps {
    
}
 
const Navbar: FC<NavbarProps> = () => {
    return ( 
        <>
        <Box 
        display="flex"
        justifyContent="space-between"
        px="2%"
        py="1%"
        bg="#FFFFFF"
        >
            <Box>
                <Heading
                fontSize="24px">
                    Herosocial
                </Heading>
            </Box>
            <Box>
                <Search/>
            </Box>
            <Box
            display="flex"
            justifyContent="space-between">
                <Box>
                    <Icon as={MdOutlineAddBox}
                    borderRadius="50%"
                    bg="#F3F4F6" 
                    alignItems="center"/>
                </Box>
                <Box>
                    <Icon as={BsCameraVideo}
                    borderRadius="50%"
                    bg="#F3F4F6" 
                    alignItems="center"/>
                </Box>
              
                <Avatar
                p="5%"
                w="34px"
                h="34px" 
                />
            </Box>
        </Box>
        </>
     );
}
 
export default Navbar;