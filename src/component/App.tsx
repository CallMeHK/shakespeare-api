import * as React from 'react'
import { css } from '@emotion/css'
import Container from '@material-ui/core/Container'
import AppBar from './common/AppBar'
import FilterCard from './filter/FilterCard'
import ReviewTable from './table/ReviewTable'
import { useReviewContext } from '../context/review.context'
import CircularProgress from '@material-ui/core/CircularProgress'

export const App: React.FC = () => {
  const data = useReviewContext()

  return (
    <div>
      <AppBar />
      <Container>
        <div className={spacerStyle} />
        {data.isLoading && (
          <div className={loadingStyle}>
            <CircularProgress data-testid='loader' color="secondary" />
          </div>
        )}
        {data.isError && (
          <div className={loadingStyle}>
            <p>Sorry! We cannot connect to the Shakespeare API at this time.</p>
          </div>
        )}
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

const loadingStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
})
