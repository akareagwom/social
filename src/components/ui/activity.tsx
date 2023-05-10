import {FC} from 'react';
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

interface ActivityProps {
    
}
 
const Activity: FC<ActivityProps> = () => {
    return ( 
        <>
        <Card
        w="27%"
        m="1%">
            <CardHeader>
                <Box
                display="flex"
                justifyContent="space-between">
                <Heading fontSize="14px" >Activity</Heading>
                <Heading fontSize="14px" color="#BDBDBD" >See All</Heading>
                </Box>
                <Text
                fontSize="10px"
                fontWeight="500">
                    Stories About You
                </Text>
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
                
            </CardBody>
        </Card>
        </>
     );
}
 
export default Activity;