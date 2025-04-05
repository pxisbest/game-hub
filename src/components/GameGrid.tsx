import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {
    const {games,error,isLoading}=useGames();
    const skeletons=[1,2,3,4,5,6];
    return (
    <>
    {/* render error message only if there's an error */}
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3}} gap="40px">
      {isLoading && skeletons.map(skeleton =><GameCardSkeleton key={skeleton}/>)}
      {games.map(game=> <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid