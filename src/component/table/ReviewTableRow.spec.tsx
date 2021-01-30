import * as React from 'react'
import ReviewTableRow from './ReviewTableRow'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Collapse from '@material-ui/core/Collapse'
import { shallow } from 'enzyme'

describe('ReviewTableRow', () => {
  let review: any
  beforeEach(() => {
    review = {
      id: 'id',
      author: 'testAuthor',
      rating: 2,
      publish_date: '2016-08-02T23:25:47.655774Z',
    }
  })
  it('should render the correct props', () => {
    const wrapper = shallow(<ReviewTableRow review={review} />)
    expect(wrapper.find('[data-testid="author"]').text()).toBe('testAuthor')
    expect(wrapper.find('[data-testid="rating"]').text()).toBe('2')
    expect(wrapper.find('[data-testid="publish_date"]').text()).toBe(
      '08/02/2016'
    )
  })
  it('should open the collapse on icon click', () => {
    const wrapper = shallow(<ReviewTableRow review={review} />)
    wrapper.find(IconButton).simulate('click')
    wrapper.update()
    expect(wrapper.find(KeyboardArrowUpIcon).exists()).toBe(true)
    expect(wrapper.find(Collapse).props().in).toBe(true)
  })
})
