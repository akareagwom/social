import { Icon, Input } from '@chakra-ui/react';
import {FC} from 'react'
import {BiSearch} from 'react-icons/bi'

interface SearchProps {
    
}
 
const Search: FC<SearchProps> = () => {
    return ( 
        <>
        <Input 
        type='text' 
        w="35%"
        h="15%"
        bg="#F3F4F6"
        />
        <Icon 
        as={BiSearch}
        pos="absolute"
        left="1%"
        top="60%"
        />
        </>
     );
}
 
export default Search;