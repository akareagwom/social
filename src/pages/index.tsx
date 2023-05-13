import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/ui/navbar";
import Activity from "../components/ui/activity";
import Layout from "../components/layout/layout";
import Cards from "../components/ui/card";
import Story from "../components/ui/story";



export default function Home() {
  return (
    <>
    <Layout>
      <Box
      overflow="hidden">
        <Box
        // w="150%"
        overflow="hidden"
        p="3%">
          <Story></Story>
        </Box>
        <Box
        w="200%"
        my="2%">
          <Cards></Cards>
        </Box>
        <Box
        w="200%"
        my="2%">
          <Cards></Cards>
        </Box>
      </Box>
      
    </Layout>
    
    </>
  )
}
