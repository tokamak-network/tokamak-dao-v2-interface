import { Flex } from "@chakra-ui/react"
import { CardTitle } from "./CardTitle"
import { useMemo } from "react"
import { ElectionSideTable } from "@/common/table/election/ElectionSideTable"

type ElectionSideProp = {
  candidates: any
}

export const ElectionSide = (args: ElectionSideProp) => {
  const { candidates } = args;
  const columns = useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'rank',
      },
      {
        Header: 'Candidate',
        accessor: 'candidiate',
      },
      {
        Header: 'Total Vote',
        accessor: 'totalVote',
      },
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: () => null,
      },
    ], [],
  );
  console.log(candidates)
  return (
    <Flex 
      w={'378px'}
      ml={'30px'}
      flexDir={'column'}
    >
      <CardTitle 
        name={'Rank'}
        mb={'35px'}
      />
      {candidates ?
        <ElectionSideTable 
          columns={columns}
          data={candidates}
        />
       : ''}
    </Flex>
  )
}