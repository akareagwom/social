import { Box, SimpleGrid } from "@chakra-ui/react";
import { FC, ReactComponentElement, ReactNode } from "react";
import Navbar from "../ui/navbar";
import Activity from "../ui/activity";
import Messages from "../ui/messages";
import Suggest from "../ui/suggest";
import Explore from "../ui/explore";

interface LayoutProps {
    children: ReactNode
}
 
const Layout: FC<LayoutProps> = ({children}) => {
    return ( 
        <>
            
                <Box>
                    <Navbar/>
                </Box>

                <Box
                bg="#F3F4F6"
                h="auto">
                    <SimpleGrid
                    columns={3}
                    spacing={1}>
                    <Box
                    mt="1.5%">
                        <Box
                        my="2%">
                            <Activity/>
                        </Box>
                        <Box
                        my="2%">
                            <Explore/>
                        </Box>
                    </Box>
                    <Box
                    w="120%"
                    maxW="100vw"
                    ml="-11.5%"
                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar': {
                        width: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                        width: '6px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                        background: '#000',
                        borderRadius: '24px',
                        },
                    }}
                    >
                        {children}
                    </Box>
                    <Box
                    mt="1.5%">
                        <Box
                        my="2%">
                        <Messages/>
                        </Box>
                        <Box
                        mt="1.5%">
                            <Suggest/>
                        </Box>
                    </Box>
                    
                    </SimpleGrid>
                </Box>
        </>
     );
}
 
export default Layout;