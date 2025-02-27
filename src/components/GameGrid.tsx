import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';


const GameGrid = () => {
    const {games,error}=useGames();
    return (
    <>
    {/* render error message only if there's an error */}
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3}} gap="40px">
        {games.map(game=> <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid