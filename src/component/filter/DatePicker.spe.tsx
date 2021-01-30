import * as React from 'react'
import DatePicker from './DatePicker'
import { shallow } from 'enzyme'
import { KeyboardDatePicker } from '@material-ui/pickers'

describe('DatePicker', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <DatePicker date={null} onChange={() => {}} label="label" />
    )
    expect(wrapper.find(KeyboardDatePicker).props().label).toBe('label')
  })
})
