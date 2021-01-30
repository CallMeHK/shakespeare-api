import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { CustomerReview } from '../../services/review.api'
import ReviewTableRow from './ReviewTableRow'

type IReviewTable = {
  reviews: CustomerReview[]
}

const ReviewTable: React.FC<IReviewTable> = ({ reviews }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Author</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((review) => (
            <ReviewTableRow key={review.id} review={review} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReviewTable
