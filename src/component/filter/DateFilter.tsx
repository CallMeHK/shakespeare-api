import { css } from '@emotion/css'
import * as React from 'react'
import { useReviewContext } from '../../context/review.context'
import DatePicker from './DatePicker'

const DateFilter: React.FC = () => {
  const { reviews } = useReviewContext()

  const [minDate, setMinDate] = React.useState<Date | null>(null)
  const [maxDate, setMaxDate] = React.useState<Date | null>(null)

  return (
    <div className={datePickerContainerStyle}>
      <DatePicker
        label="Min Date"
        date={minDate}
        onChange={(e: any) => setMinDate(e.target.value)}
      />
      <div className={datePickerSpacerStyle} />
      <DatePicker
        label="Max Date"
        date={maxDate}
        onChange={(e: any) => setMaxDate(e.target.value)}
      />
    </div>
  )
}
const datePickerSpacerStyle = css({
  width: 10,
})

const datePickerContainerStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
})
export default DateFilter
