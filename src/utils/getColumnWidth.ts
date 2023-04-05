export function getColumnWidthElection(columnName: string) {
  return columnName === 'rank' ? '50px' :
    columnName === 'candidate' ? '190px' :
    columnName === 'totalVote' ? '178px' :
    columnName === 'expander' ? '0px' : ''
}
