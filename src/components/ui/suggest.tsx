import { FC } from "react";
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading,
    Box,
    Text,
    Avatar, 
} from '@chakra-ui/react'

interface SuggestProps {
    
}
 
const Suggest: FC<SuggestProps> = () => {
    return ( 
        <Card
        w="77%"
        mx="10%">
            <CardHeader>
                <Box
                display="flex"
                justifyContent="space-between">
                <Heading fontSize="14px" >Suggested For You</Heading>
                <Heading fontSize="14px" color="#BDBDBD" >See All</Heading>
                </Box>
            </CardHeader>
            <CardBody>
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
     );
}
 
export default Suggest;