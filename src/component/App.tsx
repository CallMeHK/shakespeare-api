import * as React from 'react'
import { css } from '@emotion/css'
import Container from '@material-ui/core/Container'
import AppBar from './common/AppBar'
import FilterCard from './filter/FilterCard'
import ReviewTable from './table/ReviewTable'

export const App: React.FC = () => (
  <div>
    <AppBar />
    <Container>
      <div className={spacerStyle} />
      <FilterCard />
      <div className={spacerStyle} />
      <ReviewTable />
    </Container>
  </div>
)

const spacerStyle = css({
  height: 20,
})
