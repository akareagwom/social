import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/ui/navbar";
import Activity from "../components/ui/activity";



export default function Home() {
  return (
    <>
      <Box
      bg="#F3F4F6"
      h="100vh">
        <Box
        
        >
          <Navbar/>
        </Box>
        <Box>
          <Activity/>
        </Box>
      </Box>
    </>
  )
}
