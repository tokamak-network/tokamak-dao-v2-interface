import { useEffect, useState } from 'react';
import {
  Column,
  useExpanded,
  usePagination,
  useTable,
  useSortBy,
} from 'react-table';
import { Flex } from '@chakra-ui/react';
import { Pagination } from '@/common/table/Pagination';
import { GuageGraph } from './GuageGraph';


type VoterGraphSectionProps = {
  columns: Column[];
  data: any[]
  totalVote: string
}

export const VoterGraphSection = (args: VoterGraphSectionProps) => {
  const { columns, data, totalVote } = args
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    page,
    setPageSize,
    previousPage,
    nextPage,
    state: {pageIndex, pageSize},
  } = useTable(
    {columns, data, initialState: {pageIndex: 0}},
    useSortBy,
    useExpanded,
    usePagination,
  );
  const [currentPage, setCurrentPage] = useState(0)
  const [buttonClick, setButtonClick] = useState(Boolean)



  useEffect(() => {
    setPageSize(4)
  },[setPageSize])

  useEffect(() => {
    if (pageIndex % 4 === 0 && buttonClick) setCurrentPage(pageIndex)
    if (pageIndex % 4 === 3 && !buttonClick) setCurrentPage(pageIndex - 3)
  }, [buttonClick, pageIndex])

  const goPrevPage = () => {
    previousPage();
    setButtonClick(false)
  };

  const goNextPage = () => {
    nextPage();
    setButtonClick(true)
  };

  return (
    <Flex
      flexDir={'column'}
    >
      <Flex
        h={'246px'}
        flexDir={'column'}
      >
        <>
          {page ? page.map((row: any) => {
            const {
              id,
              stakedAmount,
            } = row.original
            const staked = id.indexOf('-')
            const staker = id.slice(0,staked)
            return [
              <GuageGraph 
                voter={staker}
                votingAmount={stakedAmount}
                totalVote={totalVote}
              />
            ]
          }) : ''}

        </>
      </Flex>
      <Pagination 
        currentPage={currentPage}
        prevPage={goPrevPage}
        nextPage={goNextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
      />
    </Flex>
  )
}