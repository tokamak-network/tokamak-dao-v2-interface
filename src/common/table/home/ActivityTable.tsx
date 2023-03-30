import {FC, useState, useRef, Fragment} from 'react';
import {
  Column,
  useExpanded,
  usePagination,
  useTable,
  useSortBy,
} from 'react-table';
import {
  chakra,
  Text,
  Flex,
  Box,
  useColorMode,
  Center,
  useTheme,
  Link,
} from '@chakra-ui/react';

import { convertNumber } from '../../../utils/number';
import { useRecoilState } from 'recoil';
import { trimAddress } from '../../../utils/trimAddress';
import { getEventExplanation } from '../../../utils/getExplanation';
import moment from 'moment';


type ActivityTableProps = {
  columns: Column[];
  data: any[];
  candidateList: any[];
  isLoading: boolean;
};

export const ActivityTable: FC<ActivityTableProps> = ({
  columns,
  data,
  isLoading,
  candidateList
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    page,
    state: {pageIndex, pageSize},
  } = useTable(
    {columns, data, initialState: {pageIndex: 0}},
    useSortBy,
    useExpanded,
    usePagination,
  );
  const theme = useTheme();


  return (
    <Box overflowX={'auto'}>
      <chakra.table
        width={'full'}
        // variant="simple"
        {...getTableProps()}
        display="flex"
        flexDirection="column"
      >
        <chakra.tbody
          {...getTableBodyProps()}
          display="flex"
          flexDirection="column"
          borderTop={'dotted 2px #2072ca'}
        >
          {page && page.map((row: any, i) => {
            prepareRow(row);
            return [
              <chakra.tr
                {...row.getRowProps()}
                w={'750px'}
                borderBottom={'dotted 2px #2072ca'}
              >
                {row.cells && row.cells.map((cell: any, index: number) => {
                  const {
                    blockTimestamp, 
                    contract, 
                    data, 
                    eventName, 
                    transactionHash
                  } = cell.row.original;

                  const type = cell.column.id;

                  return (
                    <chakra.td
                      w={
                        type === 'tx'
                          ? '57px'
                          : type === 'transactionid'
                          ? '100px'
                          : type === 'description'
                          ? '480px'
                          : type === 'time'
                          ? '113px'
                          : '0px'
                      }
                      h={'55px'}
                      {...cell.getCellProps()}
                    >
                      {type === 'tx' ? (
                        <Text
                          fontSize={'15px'}
                          fontWeight={'bold'}
                          color={'#fff'}
                        >
                          Tx
                        </Text>
                      ) : ('')}
                      {type === 'transactionid' ? (
                        <Link
                          fontSize={'14px'}
                          textAlign={'left'}
                          color={'#8fc7fd'}
                        >
                          {trimAddress({
                            address: transactionHash,
                            firstChar: 8,
                            lastChar: 0,
                            dots: '...'
                          })}
                        </Link>
                      ) : ('')}
                      {type === 'description' ? (
                        <Text
                          fontSize={'14px'}
                          
                        >
                          {getEventExplanation(cell.row.original, candidateList)}
                        </Text>
                      ) : ('')}
                      {type === 'time' ? (
                        <Text
                          fontSize={'13px'}
                          color={'#8fc7fd'}
                        >
                          {moment.unix(blockTimestamp).fromNow(false)}
                        </Text>
                      ) : ('')}

                    </chakra.td>
                  )
                })}
              </chakra.tr>
            ]
          })
        }
        </chakra.tbody>
      </chakra.table>
    </Box>
  );
}