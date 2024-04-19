import { Flex } from "@chakra-ui/react"
import { CardTitle } from "common/card/CardTitle"
import { useEffect, useMemo, useState } from "react"
import { ElectionSideTable } from "@/common/table/election/ElectionSideTable"
import { useWeb3React } from '@web3-react/core';
import { ResourceCard } from "common/card/ResourceCard";
import { YourStakedCard } from "./side/YourStakedCard";
import { convertNumber } from '../../../utils/number';

type ElectionSideProp = {
  candidates: any
}

export const ElectionSide = (args: ElectionSideProp) => {
  const { candidates } = args;
  const { account } = useWeb3React();
  const [ myStakedAmount, setMyStakedAmount ] = useState<string | undefined>('0.00')
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

  useEffect(() => {
    if (account && candidates && candidates.stakedUserList) {
      const stakedUserList = candidates.stakedUserList
      const myStaked = stakedUserList.find((staked: any) => staked.id.slice(0, staked.id.indexOf('-')) === account.toLowerCase())
      const stakedAmount = myStaked ? convertNumber({
        amount: myStaked.stakedAmount,
        type: 'ray',
        localeString: true
      }) : '0.00'
      setMyStakedAmount(stakedAmount)
    }
  }, [account, candidates])

  return (
    <Flex 
      w={'378px'}
      ml={'30px'}
      flexDir={'column'}
    >
      {account && candidates ?
        <Flex flexDir={'column'} mb={'30px'}>
          <CardTitle 
            name={'Your Staked'}
            mb={'35px'}
          />
          <YourStakedCard 
            account={account}
            stakedAmount={myStakedAmount}
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