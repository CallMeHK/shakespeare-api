import * as React from 'react'
import { shallow } from 'enzyme'

import FilterForm from './FilterForm'
import NameFilter from './NameFilter'
import DateFilter from './DateFilter'
import RatingFilter from './RatingFilter'

describe('FilterForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<FilterForm />)

    expect(wrapper.find(NameFilter).exists()).toBe(true)
    expect(wrapper.find(DateFilter).exists()).toBe(true)
    expect(wrapper.find(RatingFilter).exists()).toBe(true)
  })
})
