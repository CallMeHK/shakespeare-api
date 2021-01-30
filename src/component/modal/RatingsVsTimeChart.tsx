import { Tooltip } from '@material-ui/core'
import * as React from 'react'
import * as R from 'ramda'
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts'
import { useReviewContext } from '../../context/review.context'
import { format } from 'date-fns'

const RatingsVsTimeChart: React.FC = () => {
  const { filter } = useReviewContext()
  const reviewsWithTime = filter.reviews.map((review) => ({
    rating: review.rating,
    publish_date: new Date(review.publish_date).getTime(),
  }))

  return (
    <ResponsiveContainer width="85%" height={400}>
      <ScatterChart
        width={400}
        height={400}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="publish_date"
          name="publish_date"
          tickFormatter={(unixTime) => format(unixTime, 'MM/dd/yyyy')}
        />
        <YAxis dataKey="rating" name="rating" domain={[0, 5]} />
        {/* @ts-ignore */}
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter
          name="Rating"
          className={'asdf'}
          data={reviewsWithTime}
          fill="#8885d8"
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export default RatingsVsTimeChart
