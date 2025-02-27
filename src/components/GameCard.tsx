import { Game } from '@/hooks/useGames'
import { Card, CardBody, CardRoot, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import { platform } from 'os'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card.Root borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>

        </CardBody>
    </Card.Root>
  )
}

export default GameCard