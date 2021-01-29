import * as React from 'react'
import DateFilter from './DateFilter'
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'

const FilterForm: React.FC = () => {
  return (
    <div>
      <NameFilter />
      <RatingFilter />
      <DateFilter />
    </div>
  )
}

export default FilterForm