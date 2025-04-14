import useGenres from '@/hooks/useGenres'
import { Button, HStack, Image, Link, List , ListItem,  ListRoot,  Spinner,  Text } from '@chakra-ui/react';
import { Genre } from '@/hooks/useGenres';

interface Props{
    onSelectGenre:(genre:Genre)=>void
    selectedGenre:Genre|null
}

const GenreList = ({selectedGenre,onSelectGenre}:Props) => {
    const {data,isLoading,error} = useGenres();
    if(error) return null
    if(isLoading) return <Spinner/>
    return (
        <ListRoot listStyle="none" ps={0}>
            {data.map(genre=>(
                <ListItem key={genre.id} paddingY="8px">
                    <HStack>
                        <Image boxSize="32px" borderRadius={5} src={(genre.image_background)} />
                        <Text fontWeight={genre.id===selectedGenre?.id?"bold":"normal"} onClick ={()=>onSelectGenre(genre)}fontSize='lg' cursor="pointer" _hover={{textDecoration: "underline"}}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </ListRoot>
  )
}

export default GenreList