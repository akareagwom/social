import {FC} from 'react'

import { Box, Card, CardBody, Image, CardHeader,Heading, SimpleGrid } from "@chakra-ui/react";

interface ExploreProps {
    
}
 
const Explore: FC<ExploreProps> = () => {
    return ( 
        <Box>
            <Card
            w="77%"
            mx="10%">
                <CardHeader>
                    <Box
                    display="flex"
                    justifyContent="space-between">
                    <Heading fontSize="14px" >Explore</Heading>
                    <Heading fontSize="14px" color="#BDBDBD" >See All</Heading>
                    </Box>
                </CardHeader>
                <CardBody>
                    <SimpleGrid
                    columns={3}
                    // pos="absolute"
                    // rows = {4}
                    spacing={1}
                    gap={2}>
                        <Box
                        // px="25%"
                        >
                            <Image h="75px" w="85px" borderRadius="5px" src="https://i.pinimg.com/564x/be/c8/29/bec8297d5b6720aa943a737b8badd799.jpg" />
                        </Box>
                        <Box>
                            <Image h="75px" w="85px" borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image h="75px" w="85px" borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image h="75px" w="85px" borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image h="75px" w="85px" borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        <Box>
                            <Image h="75px" w="85px" borderRadius="5px" src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box>
                        {/* <Box>
                            <Image src="https://i.pinimg.com/564x/e0/2a/ae/e02aae7f715559e7ace147845f7b8560.jpg" />
                        </Box> */}
                    </SimpleGrid>
                </CardBody>
            </Card>
        </Box>
     );
}
 
export default Explore;