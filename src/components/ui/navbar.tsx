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
            <Box 
            w="40%"
            // h="-20%"
            // py="10%"

            >
                <Search/>
            </Box>
            <Box
            w="15%"
            alignItems="baseline"
            display="flex"
            justifyContent="space-between">
                <Box>
                    <Icon as={MdOutlineAddBox}
                    borderRadius="50%"
                    bg="#F3F4F6" 
                    w="24px"
                    h="24px"
                    alignItems="center"
                    p="20%"/>
                </Box>
                <Box>
                    <Icon as={BsCameraVideo}
                    borderRadius="50%"
                    bg="#F3F4F6" 
                    w="24px"
                    h="24px"
                    alignItems="center"
                    p="20%"/>
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