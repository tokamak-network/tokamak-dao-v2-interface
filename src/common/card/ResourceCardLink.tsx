import { Flex} from "@chakra-ui/react"
import Image from "next/image"
import ICON from 'assets/images/resources-icon.svg'
import Link from "next/link";

type ResourceCardLinkProp = {
  title: string
  link: string
}

export const ResourceCardLink = (args: ResourceCardLinkProp) => {
  const { title, link } = args
  return (
    <Flex flexDir={'row'} fontSize={'15px'} color={'#2a72e5'} mb={'13px'}>
      <Flex mr={'4px'}>
        <Image src={ICON} alt='' />
      </Flex>
      <Link
        href={link}
        passHref
      >
        {title}
      </Link>
    </Flex>
  )

}