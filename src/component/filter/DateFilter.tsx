import { css } from '@emotion/css'
import * as React from 'react'
import { FilterFunc, useReviewContext } from '../../context/review.context'
import { isValid, isBefore, isEqual } from 'date-fns'
import DatePicker from './DatePicker'
import { CustomerReview } from '../../services/review.api'
import * as R from 'ramda'

const isAfterAndValid = (
  beforeDate: Date | null,
  afterDate: Date | null
): boolean => {
  if (beforeDate === null || afterDate === null) return true

  const isBeforeActualyBefore = isBefore(beforeDate, afterDate)
  const isDatesEqual = isEqual(afterDate, beforeDate)

  if (isBeforeActualyBefore || isDatesEqual) return true
  return false
}

const buildDateFilter = (
  minDate: Date | null,
  maxDate: Date | null
): FilterFunc => (reviews) =>
  reviews.filter(
    (review: CustomerReview) =>
      isAfterAndValid(minDate, new Date(review.publish_date)) &&
      isAfterAndValid(new Date(review.publish_date), maxDate)
  )

const DateFilter: React.FC = () => {
  const { filter } = useReviewContext()

  const [minDate, setMinDate] = React.useState<Date | null>(null)
  const [maxDate, setMaxDate] = React.useState<Date | null>(null)

  const handleMinDate = (date: Date | null) => {
    if (date === null || isValid(date)) {
      filter.date.set(buildDateFilter(date, maxDate))
      setMinDate(date)
    }
  }
  const handleMaxDate = (date: Date | null) => {
    if (date === null || isValid(date)) {
      filter.date.set(buildDateFilter(minDate, date))
      setMaxDate(date)
    }
  }

  return (
    <div className={datePickerContainerStyle}>
      <DatePicker label="Min Date" date={minDate} onChange={handleMinDate} />
      <div className={datePickerSpacerStyle} />
      <DatePicker label="Max Date" date={maxDate} onChange={handleMaxDate} />
    </div>
  )
}
const datePickerSpacerStyle = css({
  width: 10,
})

const datePickerContainerStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '5px 10px',
})
export default DateFilter
