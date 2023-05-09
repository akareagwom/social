import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/ui/navbar";



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
        <Text>hola</Text>
      </Box>
    </>
  )
}
