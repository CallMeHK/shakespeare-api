import * as React from 'react'
import FilterCard from './FilterCard'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'
import ChartModal from '../modal/ChartModal'

describe('FilterCard', () => {
  it('set modal to open on button click', () => {
    const wrapper = shallow(<FilterCard />)

    wrapper.find(Button).simulate('click')
    wrapper.update()
    expect(wrapper.find(ChartModal).props().isOpen).toBe(true)
  })
})
