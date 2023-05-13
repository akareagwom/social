import { Box, Card,Text, CardBody, CardHeader, Image } from '@chakra-ui/react';
import {FC} from 'react';
// import * as photo from '../../assets/home.png'

interface CardsProps {
    
}
 
const Cards: FC<CardsProps> = () => {
    return (  
        <Box>
            <Card
            w="50%"
            >
                <CardHeader>
                    doflamingo
                </CardHeader>
                <CardBody
                >
                    <Box
                    w="70%"
                    h="20%">
                        <Image
                        src="https://images.unsplash.com/photo-1588971705973-20c181809c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                        alt='clerk kent'
                        // w="100%" 
                        // h="50%"
                        />
                    </Box>
                    <Text
                    fontSize="12px">
                    Clark Kent   Hello, everyone! Lois and I are excited to announce the birth of our first child! I'm overjoyed to be a father, and I swear to do all in my power to love and care for our young child. I appreciate your love and support.
                    </Text>
                </CardBody>
            </Card>
        </Box>
    );
}
 
export default Cards;