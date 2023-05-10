import { Icon, Input } from '@chakra-ui/react';
import {FC} from 'react'
import {BiSearch} from 'react-icons/bi'

interface SearchProps {
    
}
 
const Search: FC<SearchProps> = () => {
    return ( 
        <>
        <Input 
        // variant={"unstyled"}
        type='text' 
        // p="5%"
        fontSize="12px"
        bg="#F3F4F6"
        />
        {/* <Icon 
        as={BiSearch}
        pos="absolute"
        left="1%"
        top="60%"
        /> */}
        </>
     );
}
 
export default Search;