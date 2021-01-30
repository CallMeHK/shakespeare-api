import * as React from 'react'
import ChartModal from './ChartModal'
import RatingsVsTimeChart from './RatingsVsTimeChart'
import IconButton from '@material-ui/core/IconButton'
import { shallow } from 'enzyme'

describe('ChartModal', () => {
  it('should close modal on icon click', () => {
    const onClickStub = jest.fn()
    const wrapper = shallow(
      <ChartModal setIsOpen={onClickStub} isOpen={true} />
    )
    wrapper.find(IconButton).simulate('click')
    expect(onClickStub).toBeCalled()
  })
})
