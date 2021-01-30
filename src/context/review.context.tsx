import * as React from 'react'
import * as ReviewService from '../services/review.api'
import { CustomerReview } from '../services/review.api'
import * as R from 'ramda'
import useFilteredReviews from '../hooks/useFilteredReviews'

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
    date: FilterUtils
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

  const fetchReviews = React.useCallback(async () => {
    const { success, data } = await ReviewService.fetchAllReviews()

    if (!success) return setIsError(true)

    setReviews(data)
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    fetchReviews()
  }, [])

  const filter = useFilteredReviews(reviews)

  const value = {
    reviews,
    filter,
    isLoading,
    isError,
  }

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  )
}

export { ReviewContext, useReviewContext }
export default ReviewContextProvider
