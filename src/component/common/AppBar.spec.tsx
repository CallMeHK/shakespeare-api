import * as React from 'react'
import AppBar from './AppBar'
import { shallow } from 'enzyme'
import Typography from '@material-ui/core/Typography'

describe('AppBar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AppBar />)

    expect(wrapper.find(Typography).text()).toBe('Shakespeare Reviews')
  })
})
