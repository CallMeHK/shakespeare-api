import * as React from 'react'
import Card from '@material-ui/core/Card'
import { css } from '@emotion/css'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FilterForm from './FilterForm'

const FilterCard: React.FC = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary">Filter Reviews</Typography>
          <FilterForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default FilterCard
