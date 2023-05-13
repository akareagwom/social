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
                mt="10%"
                >
                    <Search/>
                </Box>
                <Tabs
                variant="line"
                mr="4%"
                >
                    <TabList
                    textAlign="start"
                    // w="5%"
                    >
                        <Tab fontSize="9.5px">Primary</Tab>
                        <Tab fontSize="9.5px">General</Tab>
                        <Tab fontSize="9.5px">Requests(2)</Tab>
                    </TabList>
                </Tabs>
            </CardHeader>
            <CardBody>
                
                <Box>
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
                            Jonn Jones
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                            Active 30m ago
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
                            Lex Luthor
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Active 45m ago
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
                            Shareya Hall
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Active 1h ago
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
                            Iris West
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Active 1h ago
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
                            Hal Jordan
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Active 2h ago
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
                            Oliver Queen
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Active 2h ago
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
                            Barbara Gordon
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Active 3h ago
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