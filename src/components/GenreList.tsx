import useGenres from '@/hooks/useGenres'
import { HStack, Image, List , ListItem,  ListRoot,  Text } from '@chakra-ui/react';

const GenreList = () => {
    const {data} = useGenres();
  return (
    <ListRoot listStyle="none" ps={0}>
        {data.map(genre=>(
            <ListItem key={genre.id} paddingY="8px">
                <HStack>
                    <Image boxSize="32px" borderRadius={5} src={(genre.image_background)} />
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>
        ))}
    </ListRoot>
  )
}

export default GenreList