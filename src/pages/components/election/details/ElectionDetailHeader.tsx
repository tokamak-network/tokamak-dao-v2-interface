import { timeConverter } from "@/components/getDate";
import { Flex, Text } from "@chakra-ui/react";
import { fromNow } from '../../../../utils/getDate';
import Image from "next/image";
import CLOCK from '@/assets/images/poll-time-active-icon.png'

type ElectionDetailHeaderProp = {
  memberSlot: number
  name: string
  memberJoinedTime: number
  kind: string
}

export const ElectionDetailHeader = (args: ElectionDetailHeaderProp) => {
  const { memberSlot, name, memberJoinedTime, kind } = args;

  return (
    <Flex flexDir={'column'} mb={'30px'}>
      {memberSlot === -1 ? '' :
        <Flex
          fontSize={'10px'}
          flexDir={'row'}
          justifyContent={'space-between'}
          h={'20px'}
        > 
          <Text>
            {`Elected at ${timeConverter(memberJoinedTime)}`}
          </Text>
          <Flex h={'10px'}>
            <Image src={CLOCK} alt='' />
            <Text>
              Slot {memberSlot} in {fromNow(memberJoinedTime)}
            </Text>
          </Flex>
        </Flex>
      }
      <Flex flexDir={'row'} alignItems={'end'}>
        <Text fontSize={'20px'} mr={'5px'}>
          {name}
        </Text>
        <Text fontSize={'13px'} mb={'3px'}>
          - {kind}
        </Text>
      </Flex>
    </Flex>
  )
}