import { Flex } from "@chakra-ui/react"
import { convertNumber } from '../../../utils/number';
import { date2 } from '../../../utils/getDate';


type InfoRowTypeProps = {
  title: string,
  description: string,
  value: string | number
  type: string 
}

export const InfoRow = (args: InfoRowTypeProps) => {
  let {
    description,
    title,
    value,
    type
  } = args
  let values
  if (type === 'TON') {
    values = value ? convertNumber({
      amount: value.toString(),
      type: 'ray',
      localeString: true
    }) : ''
  } else if (type === 'date') {
    values = date2(Number(value) / 1000)
  } else {
    values = value
  }
  
  return (
    <Flex
      flexDir={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'726px'}
      h={'32px'}
      mb={'7px'}
    >
      <Flex
        flexDir={'row'}
        fontSize={'14px'}
        fontWeight={'normal'}
        color={'#3e495c'}
      >
        {title}
      </Flex>
      <Flex
        fontSize={'13px'}
        fontWeight={'normal'}
        color={'#818992'}
      >
        {values}
        {type === 'TON' ? ' TON' : ''}
      </Flex>

    </Flex>
  )
}