import { Box, Wrap, WrapItem, Avatar } from "@chakra-ui/react";
import {FC} from 'react'

interface StoryProps {
    
}
 
const Story: FC<StoryProps> = () => {
    return ( 
        <>
            <Box
            w="150%"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                w="100%"
                p="2%"
                borderRadius="10px"
                bg="#FFFFFF"
                >
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    <Avatar name='Kola Tioluwani' src='https://images.unsplash.com/photo-1588971705973-20c181809c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </Box>
            </Box>     
        </>
     );
}
 
export default Story;