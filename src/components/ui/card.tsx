import { Box, Card,Text,Heading, CardBody, CardHeader, Image, Avatar } from '@chakra-ui/react';
import {FC} from 'react';
import {AiFillHeart} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsSend} from 'react-icons/bs'
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
                <Box
                display="flex"
                >
                    <Avatar
                    src="https://img.mensxp.com/media/content/2020/Sep/Henry-Cavill-To-Brandon-Routh-We-Rank-5-Actors-1400x653_5f52236d11392.jpeg?w=1100&h=558&cc=1"
                    brightness="75%"
                    w="34px"
                    h="34px"/>
                    <Box
                    px="4%">
                        <Heading
                        fontSize="13px">
                            Clark Kent
                            </Heading>
                        <Text
                        color="#BDBDBD"
                        fontSize="10px">
                           Smallville, Kansas
                        </Text>
                    </Box>
                </Box>
                </CardHeader>
                <CardBody
                >
                    <Box
                    // w="70%"
                    // h="20%"
                    >
                        <Image
                        src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                        alt='clerk kent'
                        w="150%" 
                        borderRadius="10px"
                        />
                    </Box>
                    <Box
                    display="flex"
                    justifyContent="space-between"
                    w="20%"
                    my="2%">
                        <AiFillHeart color="#F0355B"/>
                        <BiMessageRounded/>
                        <BsSend/>
                    </Box>
                    <Text
                    fontSize="12px">
                    Clark Kent   Hello, everyone! Lois and I are excited to announce the birth of our first child! I&apos;m overjoyed to be a father, and I swear to do all in my power to love and care for our young child. I appreciate your love and support.
                    </Text>
                </CardBody>
            </Card>
        </Box>
    );
}
 
export default Cards;