import useGames from '@/hooks/useGames';
import { Text } from '@chakra-ui/react';


const GameGrid = () => {
    const {games,error}=useGames();
    return (
    <>
    {/* render error message only if there's an error */}
    {error && <Text>{error}</Text>}
    <ul>
        {games.map(game=> <li key={game.id}>{game.name} </li>)}
    </ul>
    </>
  )
}

export default GameGrid