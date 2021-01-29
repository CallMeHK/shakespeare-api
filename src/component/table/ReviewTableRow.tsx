import React from 'react'
import { css } from '@emotion/css'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { CustomerReview } from '../../services/review.api'
import ReviewSubTable from './ReviewSubTable'

type IReviewTableRow = {
  review: CustomerReview
}

const ReviewTableRow: React.FC<IReviewTableRow> = ({ review }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const dateObj = new Date(review.publish_date)
  const date = `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()}`

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            onClick={() => setOpen(!open)}
            size="small"
          >
            {open ? (
              <KeyboardArrowUpIcon data-testid="up-icon" />
            ) : (
              <KeyboardArrowDownIcon data-testid="down-icon" />
            )}
          </IconButton>
        </TableCell>
        <TableCell>{review.author}</TableCell>
        <TableCell align="right">{review.rating}</TableCell>
        <TableCell align="right">{date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={collapsibleCellStyle}>
              <Box margin={1}>
                <ReviewSubTable id={review.id} body={review.body} />
              </Box>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const collapsibleCellStyle = css({
  maxWidth: 720,
})

export default ReviewTableRow
