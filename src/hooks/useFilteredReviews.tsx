import * as React from 'react'
import { CustomerReview } from '../services/review.api'
import * as R from 'ramda'

type FilterUtils = {
  set: (func: FilterFunc) => void
  clear: () => void
}

type IUseFilteredReviews = {
  reviews: CustomerReview[]
  name: FilterUtils
  rating: FilterUtils
  date: FilterUtils
}

export type FilterFunc = (reviews: CustomerReview[]) => CustomerReview[]
const defaultFilter = (reviews: CustomerReview[]): CustomerReview[] => reviews

const useFilteredReveiws = (reviews: CustomerReview[]): IUseFilteredReviews => {
  const [nameFilter, setNameFilter] = React.useState<FilterFunc>(
    () => defaultFilter
  )
  const [ratingFilter, setRatingFilter] = React.useState<FilterFunc>(
    () => defaultFilter
  )

  const [dateFilter, setDateFilter] = React.useState<FilterFunc>(
    () => defaultFilter
  )

  const filteredReviews =
    reviews[0] && R.pipe(nameFilter, ratingFilter, dateFilter)(reviews)

  return {
    reviews: filteredReviews,
    name: {
      set: (func: FilterFunc) => setNameFilter(() => func),
      clear: () => setNameFilter(() => defaultFilter),
    },
    rating: {
      set: (func: FilterFunc) => setRatingFilter(() => func),
      clear: () => setRatingFilter(() => defaultFilter),
    },
    date: {
      set: (func: FilterFunc) => setDateFilter(() => func),
      clear: () => setDateFilter(() => defaultFilter),
    },
  }
}

export default useFilteredReveiws
