import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const GameCardCotainer = ({children}:Props) => {
  return (
    <Box borderRadius="10px" overflow="hidden">
        {children}
    </Box>
    
  )
}

export default GameCardCotainer