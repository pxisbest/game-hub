import { Card, CardBody, Skeleton} from "@chakra-ui/react"
import { SkeletonText } from "./ui/skeleton"


const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius="10px" overflow="hidden">
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText height={5}/>
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton