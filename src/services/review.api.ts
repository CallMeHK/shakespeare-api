import { Success } from '../utils/success.interface'

export type CustomerReview = {
  id: string
  author: string
  rating: number
  body: string
  publish_date: string
}

const fetchAllReviews = async (): Promise<Success<CustomerReview[]>> => {
  try {
    const response = await fetch('https://shakespeare.podium.com/api/reviews', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
      },
    })

    const data = (await response.json()) as CustomerReview[]

    return { success: true, data }
  } catch {
    return {
      success: false,
    }
  }
}

export { fetchAllReviews }
