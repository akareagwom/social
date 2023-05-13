import { Box, SimpleGrid } from "@chakra-ui/react";
import { FC, ReactComponentElement, ReactNode } from "react";
import Navbar from "../ui/navbar";
import Activity from "../ui/activity";
import Messages from "../ui/messages";

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
                            <Activity/>
                        </Box>
                    </Box>
                    <Box
                    w="120%"
                    ml="-11.5%"
                    >
                        {children}
                    </Box>
                    <Box
                    mt="1.5%">
                        <Box>
                        <Messages/>
                        </Box>
                    </Box>
                    
                    </SimpleGrid>
                </Box>
        </>
     );
}
 
export default Layout;