import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardCotainer from './GameCardCotainer';
import { Genre } from '@/hooks/useGenres';

interface Props{
    selectedGenre:Genre|null
}

const GameGrid = ({selectedGenre}:Props) => {
    const {data,error,isLoading}=useGames(selectedGenre);
    const skeletons=[1,2,3,4,5,6];
    return (
    <>
    {/* render error message only if there's an error */}
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3}} gap="40px">
      {isLoading && 
      skeletons.map(skeleton =><GameCardCotainer key={skeleton}><GameCardSkeleton/></GameCardCotainer>
      )}
      {data.map((data) => <GameCardCotainer key={data.id}><GameCard  game={data}/></GameCardCotainer>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid