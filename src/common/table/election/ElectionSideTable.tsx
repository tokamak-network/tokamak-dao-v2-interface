import { chakra, Box, Flex, Text, useTheme } from '@chakra-ui/react';
import { FC, useEffect, useState } from "react";
import {
  Column,
  useExpanded,
  usePagination,
  useTable,
  useSortBy,
} from 'react-table';
import { Pagination } from '../Pagination';
import { getColumnWidthElection } from '../../../utils/getColumnWidth';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '@/components/number';
import { commify } from 'ethers/lib/utils';

type ElectionSideTableProps = {
  columns: Column[];
  data: any[];
  isLoading?: boolean;
}

export const ElectionSideTable: FC<ElectionSideTableProps> = ({
  columns,
  data,
  isLoading,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    visibleColumns,
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
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE
    console.log(columns)
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
    <Box 
      overflowX={'auto'}
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.sideCard()}
      mb={'30px'}
    >
      <chakra.table
        width={'full'}
        {...getTableProps()}
        display="flex"
        flexDirection="column"
        // mr={'30px'}
      >
        <chakra.thead
          borderBottom={"1px solid #e6eaee"}
          // mr={'30px'}
          w={"378px"}
          h={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          
        >
          <chakra.tr fontSize={"13px"} color={"#808992"} h={"40px"} pl={'17px'}>
            <chakra.th
              w={getColumnWidthElection('rank')}
            >
              Rank
            </chakra.th>
            <chakra.th
              w={getColumnWidthElection('candidate')}
            >
              Candidate
            </chakra.th>
            <chakra.th
              w={getColumnWidthElection('totalVote')}
            >
              Vote
            </chakra.th>
          </chakra.tr>
        </chakra.thead>
        <chakra.tbody
          {...getTableBodyProps()}
          display="flex"
          flexDirection="column"
          minH={'135px'}
        >
          {page ? page.map((row: any, i) => {
            prepareRow(row);

            return [
              <chakra.tr
                boxShadow={'0 1px 1px 0 rgba(96, 97, 112, 0.16)'}
                h={'35px'}
                key={i}
                w="100%"
                bg={'white.100' }
                border={''}
                display="flex"
                alignItems="center"
                {...row.getRowProps()}
              >
                {row.cells ? row.cells.map((cell: any, index: number) => {
                  const type = cell.column.id;
                  const {updateCoinageTotalString, name, candidateContract} = cell.row.original
                  const voted = convertNumber({
                    amount: updateCoinageTotalString,
                    type: 'ray'
                  })
                  const comma = voted ? commify(voted) : '0.00'
                  return (
                    <chakra.td
                      key={index}
                      fontSize={'15px'}
                      w={getColumnWidthElection(type)}
                    >
                      {type === 'rank' ?
                        <Text textAlign={'center'} pl={'5px'}>
                          {i + 1}
                        </Text>
                      : ''}
                      {type === 'candidiate' ? (
                        <Flex
                          flexDir={'row'}
                          w={'190px'}
                          alignItems={'center'}
                          pl={'10px'}
                        >
                          <Text
                            fontSize={'15px'}
                            color={'#2a72e5'}
                            textAlign={'left'}
                            mr={'4px'}
                          >
                            {name}
                          </Text>
                          <Text
                            fontSize={'12px'}
                            color={'#86929d'}
                          >
                            {trimAddress({
                              address: candidateContract,
                              firstChar: 6,
                              lastChar: 4,
                              dots: '...'
                            })}
                          </Text>
                        </Flex>
                      ) : ''}

                      {type === 'totalVote' ? 
                        <Text
                          textAlign={'right'}
                          pr={'10px'}
                          w={'100%'}
                        >
                          {`${comma} TON`}
                        </Text>
                      : ''}
                    </chakra.td>
                  )
                }) : ''}
              </chakra.tr>
            ]
          }) : ''}
        </chakra.tbody>
      </chakra.table>
      <Pagination 
        currentPage={currentPage}
        prevPage={goPrevPage}
        nextPage={goNextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
      />
    </Box>  
  )
} 