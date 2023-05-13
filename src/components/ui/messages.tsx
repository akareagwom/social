import {
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading,
    Box,
    Text,
    Avatar,
    Tabs,
    TabList,
    Tab, } from "@chakra-ui/react";
import {FC} from 'react'
import {RxPencil2} from 'react-icons/rx'
import Search from "./search";

interface MessagesProps {
    
}
 
const Messages: FC<MessagesProps> = () => {
    return ( 
        <Box>
            <Card
        w="77%"
        mx="10%">
            <CardHeader>
                <Box
                display="flex"
                justifyContent="space-between">
                <Heading fontSize="14px" >Messages</Heading>
                <Heading fontSize="14px" color="#000" >
                    <RxPencil2/>
                </Heading>
                </Box>
                <Box
                mx="2%"
                my="10%"
                >
                    <Search/>
                </Box>
            </CardHeader>
            <CardBody>
                <Tabs>
                    <TabList>
                        <Tab></Tab>
                    </TabList>
                </Tabs>
                <Box>
                    <Heading
                    fontSize="13px">
                        New
                    </Heading>
                    <Box
                display="flex"
                >
                    <Avatar
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Mentions
                            </Heading>
                        <Text
                        fontSize="10px">
                            2 stories mention you
                        </Text>
                    </Box>
                </Box>
                <Box
                display="flex"
                >
                    <Avatar
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Mentions
                            </Heading>
                        <Text
                        fontSize="10px">
                            2 stories mention you
                        </Text>
                    </Box>
                </Box>
                <Box
                display="flex"
                >
                    <Avatar
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Mentions
                            </Heading>
                        <Text
                        fontSize="10px">
                            2 stories mention you
                        </Text>
                    </Box>
                </Box>
                <Box
                display="flex"
                >
                    <Avatar
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Mentions
                            </Heading>
                        <Text
                        fontSize="10px">
                            2 stories mention you
                        </Text>
                    </Box>
                </Box>
                <Box
                display="flex"
                >
                    <Avatar
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Mentions
                            </Heading>
                        <Text
                        fontSize="10px">
                            2 stories mention you
                        </Text>
                    </Box>
                </Box>
                <Box
                display="flex"
                >
                    <Avatar
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Mentions
                            </Heading>
                        <Text
                        fontSize="10px">
                            2 stories mention you
                        </Text>
                    </Box>
                </Box>
                </Box>
            </CardBody>
        </Card>
        </Box>
     );
}
 
export default Messages;