import * as React from 'react'
import { css } from '@emotion/css'
import DateFilter from './DateFilter'
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'

const FilterForm: React.FC = () => {
  return (
    <div>
      <div className={filterTopRowStyle}>
        <NameFilter />
        <RatingFilter />
      </div>
      <DateFilter />
    </div>
  )
}

const filterTopRowStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
})

export default FilterForm
