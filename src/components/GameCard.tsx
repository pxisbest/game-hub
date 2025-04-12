import { Game } from '@/hooks/useGames'
import { Card, CardBody, CardRoot, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

import CriticScore from './CriticScore'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card.Root>
        <Image src={game.background_image}/>
        <CardBody _dark={{ backgroundColor: "gray.800" }}>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent="space-between">
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard