import {FC} from 'react';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading,
    Box,
    Text, 
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

            </CardBody>
        </Card>
        </>
     );
}
 
export default Activity;