import { trimAddress } from "@/utils/trimAddress";
import { Flex, Text } from "@chakra-ui/react"
import { date4, date3, date2 } from '../../../utils/getDate';

type AgendaCommentsType = {
  comments: any
}

export const AgendaComments = (args: AgendaCommentsType) => {
  const {
    comments
  } = args

  return (
    <Flex flexDir={'column'}>
      <Flex mb={'14px'} mt={'5px'}>
        Comments {`(${comments.length})`}
      </Flex>
      <Flex h={'1px'} bgColor={'#dfe4ee'} />
      {
        comments.map((comment: any) => {
          const voteResult = comment.vote === 1 ? 'Yes' : 'No'
          return (
            <Flex flexDir={'column'} mt={'25px'}>
              <Flex
                fontSize={'10px'}
                color={'#3e495c'}
                mb={'5px'}
              >
                {date2(Number(comment.timestamp))}
              </Flex>
              <Flex mb={'10px'} color={'#2a72e5'} fontSize={'14px'}>
                {trimAddress({
                  address: comment.voter,
                  firstChar: 6,
                  lastChar: 4,
                  dots: '...'
                })} 
                <Text color={'#3e495c'} mx={'4px'}>
                  voted 
                </Text>
                {voteResult}
              </Flex>
              {
                comment.comment ? (  
                  <Flex color={'#818992'} fontSize={'14px'}>
                    {comment.comment}
                  </Flex> 
                )
                : ''
              }
              <Flex h={'1px'} mt={'25px'} bgColor={'#dfe4ee'}/>
            </Flex>
          )
        })
      }
    </Flex>
  )
}