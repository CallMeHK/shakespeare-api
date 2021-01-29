import * as React from 'react'
import * as ReviewService from '../services/review.api'
import { CustomerReview } from '../services/review.api'
import * as R from 'ramda'

type FilterUtils = {
  set: (func: FilterFunc) => void
  clear: () => void
}

type IReviewContext = {
  reviews: CustomerReview[]
  filter: {
    reviews: CustomerReview[]
    name: FilterUtils
    rating: FilterUtils
  }
  isLoading: boolean
  isError: boolean
}

export type FilterFunc = (reviews: CustomerReview[]) => CustomerReview[]
const defaultFilter = (reviews: CustomerReview[]): CustomerReview[] => reviews

const ReviewContext = React.createContext({} as IReviewContext)

const useReviewContext = (): IReviewContext => React.useContext(ReviewContext)

const ReviewContextProvider: React.FC = ({ children }) => {
  const [reviews, setReviews] = React.useState<CustomerReview[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [isError, setIsError] = React.useState<boolean>(false)
  const [nameFilter, setNameFilter] = React.useState<FilterFunc>(
    () => defaultFilter
  )
  const [ratingFilter, setRatingFilter] = React.useState<FilterFunc>(
    () => defaultFilter
  )

  const fetchReviews = React.useCallback(async () => {
    const { success, data } = await ReviewService.fetchAllReviews()

    if (!success) return setIsError(true)

    setReviews(data)
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    fetchReviews()
  }, [])

  const filteredReviews = reviews[0] && R.pipe(nameFilter, ratingFilter)(reviews)

  const value = {
    reviews,
    filter: {
      reviews: filteredReviews,
      name: {
        set: (func: FilterFunc) => setNameFilter(() => func),
        clear: () => setNameFilter(() => defaultFilter),
      },
      rating: {
        set: (func: FilterFunc) => setRatingFilter(() => func),
        clear: () => setRatingFilter(() => defaultFilter),
      },
    },
    isLoading,
    isError,
  }

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  )
}

export { ReviewContext, useReviewContext }
export default ReviewContextProvider
