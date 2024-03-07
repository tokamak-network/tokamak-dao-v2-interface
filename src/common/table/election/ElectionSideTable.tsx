import { chakra, Box, Flex, Text, useTheme } from '@chakra-ui/react';
import { FC, useEffect, useState } from "react";
import {
  Column,
  useExpanded,
  usePagination,
  useTable,
  useSortBy,
} from 'react-table';
import { getColumnWidthElection } from '../../../utils/getColumnWidth';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '@/components/number';
import { commify } from 'ethers/lib/utils';
import { ThemeContext } from '@emotion/react';

type ElectionSideTableProps = {
  columns: Column[];
  data: any[];
  isLoading?: boolean;
  stakedAmount: string;
}

export const ElectionSideTable: FC<ElectionSideTableProps> = ({
  columns,
  data,
  isLoading,
  stakedAmount
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
  const total = convertNumber({
    amount: stakedAmount,
    type: 'ray'
  })

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
        <chakra.tbody
          {...getTableBodyProps()}
          display="flex"
          flexDirection="column"
          minH={'135px'}
          padding={'20px'}
        >
          {page ? page.map((row: any, i) => {
            prepareRow(row);

            return [
              <chakra.tr
                // boxShadow={'0 1px 1px 0 rgba(96, 97, 112, 0.16)'}
                h={'35px'}
                key={i}
                w="100%"
                bg={'white.100' }
                border={'none'}
                display="flex"
                alignItems="center"
                pb={'10px'}
                fontFamily={theme.fonts.Roboto}
                {...row.getRowProps()}
              >
                {row.cells ? row.cells.map((cell: any, index: number) => {
                  const type = cell.column.id;
                  const {id, stakedAmount} = cell.row.original
                  const voted = convertNumber({
                    amount: stakedAmount,
                    type: 'ray'
                  })
                  const percentage = Number(voted) / Number(total) * 100
                  const comma = voted 
                  //@ts-ignore
                    ? voted.toLocaleString(undefined, {
                      maximumFractionDigits: 2, 
                      minimumFractionDigits:2
                    }) 
                    : '0.00'
                  const staked = id.indexOf('-')
                  const staker = id.slice(0,staked)
                  return (
                    <chakra.td
                      key={index}
                      fontSize={'15px'}
                      w={getColumnWidthElection(type)}
                    >
                      {type === 'candidiate' ? (
                        <Flex
                          flexDir={'row'}
                          w={'140px'}
                          alignItems={'center'}
                          // pl={'10px'}
                        >
                          <Text
                            fontSize={'15px'}
                            color={'#2a72e5'}
                          >
                            {trimAddress({
                              address: staker,
                              firstChar: 6,
                              lastChar: 4,
                              dots: '...'
                            })}
                          </Text>
                        </Flex>
                      ) : ''}

                      {type === 'totalVote' ? 
                        <Flex
                          textAlign={'right'}
                          // pr={'10px'}
                          w={'100%'}
                          fontSize={'15px'}
                          color={'#86929d'}
                          flexDir={'row'}
                          justifyContent={'end'}
                          alignItems={'end'}
                        >
                          {`${percentage.toLocaleString(undefined, {maximumFractionDigits: 2})} %`}
                          <Text ml={'3px'} fontSize={'12px'}>
                          {`(${comma} TON)`}
                          </Text>
                        </Flex>
                      : ''}
                    </chakra.td>
                  )
                }) : ''}
              </chakra.tr>
            ]
          }) : ''}
        </chakra.tbody>
      </chakra.table>
      {/* <Pagination 
        currentPage={currentPage}
        prevPage={goPrevPage}
        nextPage={goNextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
      /> */}
    </Box>  
  )
} 