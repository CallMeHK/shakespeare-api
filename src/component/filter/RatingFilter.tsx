import * as React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { css } from '@emotion/css'
import { CustomerReview } from '../../services/review.api'
import { FilterFunc, useReviewContext } from '../../context/review.context'

const buildRatingFilter = (min: number, max: number): FilterFunc => (reviews) =>
  reviews.filter(
    (review: CustomerReview) => review.rating >= min && review.rating <= max
  )

const RatingFilter: React.FC = () => {
  const [min, setMin] = React.useState<number>(0)
  const [max, setMax] = React.useState<number>(5)
  const { filter } = useReviewContext()

  const onMinChange = (event: React.ChangeEvent<{ value: number }>): void => {
    if (event.target.value <= max) {
      setMin(event.target.value)
      filter.rating.set(buildRatingFilter(event.target.value, max))
    }
  }

  const onMaxChange = (event: React.ChangeEvent<{ value: number }>): void => {
    if (event.target.value >= min) {
      setMax(event.target.value)
      filter.rating.set(buildRatingFilter(min, event.target.value))
    }
  }

  return (
    <div className={selectContainerStyle}>
      <FormControl style={selectStyle}>
        <InputLabel>Min Rating</InputLabel>
        <Select onChange={onMinChange} value={min}>
          {[0, 1, 2, 3, 4, 5].map((val) => (
            <MenuItem key={'min' + val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={selectSpacerStyle} />
      <FormControl style={selectStyle}>
        <InputLabel>Max Rating</InputLabel>
        <Select onChange={onMaxChange} value={max}>
          {[0, 1, 2, 3, 4, 5].map((val) => (
            <MenuItem key={'max' + val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

const selectSpacerStyle = css({
  width: 10,
})
const selectContainerStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
})

const selectStyle = {
  minWidth: 150,
}

export default RatingFilter
