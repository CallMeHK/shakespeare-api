import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

type IReviewSubTable = {
  id: string
  body: string
}

 const ReviewSubTable: React.FC<IReviewSubTable> = ({ id, body }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          <TableRow>
            <TableCell>Review</TableCell>
            <TableCell align="right">{body}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">{id}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReviewSubTable