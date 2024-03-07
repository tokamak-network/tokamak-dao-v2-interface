import { Flex } from "@chakra-ui/react"
import { CardTitle } from "common/card/CardTitle"
import { useMemo } from "react"
import { ElectionSideTable } from "@/common/table/election/ElectionSideTable"
import { useWeb3React } from '@web3-react/core';
import { ResourceCard } from "common/card/ResourceCard";

type ElectionSideProp = {
  candidates: any
}

export const ElectionSide = (args: ElectionSideProp) => {
  const { candidates } = args;
  const { account } = useWeb3React();
  const columns = useMemo(
    () => [
      // {
      //   Header: 'Rank',
      //   accessor: 'rank',
      // },
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
      {account && candidates ?
        <Flex flexDir={'column'}>
          <CardTitle 
            name={'Your Staked'}
            mb={'35px'}
          />
          
        </Flex>
      : ''}
      <CardTitle 
        name={'List of Stakers'}
        mb={'35px'}
      />
      {candidates && candidates.staked ?
        <ElectionSideTable 
          columns={columns}
          data={candidates.stakedUserList}
          stakedAmount={candidates.stakedAmount}
        />
       : ''}
        <Flex flexDir={'column'}>
          <CardTitle 
            name={'Resources'}
            mb={'12px'}
          />
          <ResourceCard />
        </Flex>
    </Flex>
  )
}