import * as React from 'react'
import * as ReviewService from '../services/review.api'
import { CustomerReview } from '../services/review.api'

type IReviewContext = {
  reviews: CustomerReview[]
  isLoading: boolean
  isError: boolean
}

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

  const value = {
    reviews,
    isLoading,
    isError,
  }

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  )
}

export { ReviewContext, useReviewContext }
export default ReviewContextProvider
