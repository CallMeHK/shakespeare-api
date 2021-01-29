import * as React from 'react'
import { css } from '@emotion/css'
import Container from '@material-ui/core/Container'
import AppBar from './common/AppBar'
import FilterCard from './filter/FilterCard'
import ReviewTable from './table/ReviewTable'
import { useReviewContext } from '../context/review.context'

export const App: React.FC = () => {
  const data = useReviewContext()

  return (
    <div>
      <AppBar />
      <Container>
        <div className={spacerStyle} />
        {data.isLoading && 'Loading.....'}
        {!data.isLoading && (
          <>
            <FilterCard />
            <div className={spacerStyle} />
            <ReviewTable reviews={data.filter.reviews} />
          </>
        )}
      </Container>
    </div>
  )
}

const spacerStyle = css({
  height: 20,
})
