import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from "react-icons/fa"
import { Platform } from '@/hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import { IconType } from "react-icons/lib"


interface Props{
    platforms:Platform[]
}

const PlatformIconList = ({platforms}:Props) => {
    const iconMap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        android:FaAndroid,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
    }
  return (
    <HStack marginY={1}>
    {platforms.map(platform=>(
        <Icon key ={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>
    ))}
    </HStack>
  )
}

export default PlatformIconList