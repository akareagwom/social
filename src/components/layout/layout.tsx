import { Box, SimpleGrid } from "@chakra-ui/react";
import { FC, ReactComponentElement, ReactNode } from "react";
import Navbar from "../ui/navbar";
import Activity from "../ui/activity";

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
                    <Box>
                        <Activity/>
                        <Activity/>
                    </Box>
                    <Box
                    w="120%"
                    ml="-11.5%"
                    >
                        {children}
                    </Box>
                    <Box>
                        <Activity/>
                    </Box>
                    
                    </SimpleGrid>
                </Box>
        </>
     );
}
 
export default Layout;