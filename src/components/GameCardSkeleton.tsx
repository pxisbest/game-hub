import { Card, CardBody, Skeleton} from "@chakra-ui/react"
import { SkeletonText } from "./ui/skeleton"


const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height="200px" />
        <CardBody>
          {/* mimic the layout of the game card */}
            <SkeletonText height={5}/>
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton