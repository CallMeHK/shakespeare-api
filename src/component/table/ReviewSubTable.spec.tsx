import * as React from 'react'
import ReviewSubTable from './ReviewSubTable'
import TableCell from '@material-ui/core/TableCell'
import { shallow } from 'enzyme'

describe('ReviewSubTable', () => {
  it('should render the correct props', () => {
    const wrapper = shallow(<ReviewSubTable id={'testId'} body={'testBody'} />)
    expect(wrapper.find(TableCell).at(1).text()).toBe('testBody')
    expect(wrapper.find(TableCell).at(3).text()).toBe('testId')
  })
})
