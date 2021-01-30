import * as React from 'react'
import Card from '@material-ui/core/Card'
import { css } from '@emotion/css'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FilterForm from './FilterForm'
import ChartModal from '../modal/ChartModal'
import Button from '@material-ui/core/Button'

const FilterCard: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <div>
      <ChartModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Card>
        <CardContent>
          <Typography color="textSecondary">Filter Reviews</Typography>
          <FilterForm />
          <div className={buttonContainerStyle}>
            <Button onClick={() => setIsOpen(true)} variant="contained">
              Show Chart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
const buttonContainerStyle = css({
  padding: '5px 10px',
})

export default FilterCard
