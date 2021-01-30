import * as React from 'react'
import ReviewTable from './ReviewTable'
import { shallow } from 'enzyme'
import ReviewTableRow from './ReviewTableRow'


describe('ReviewTable', () => {
    let reviews: any
    beforeEach(() => {
        reviews = [
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    })
  it('should render the correct props', () => {
    const wrapper = shallow(<ReviewTable reviews={reviews}/>)
    expect(wrapper.find(ReviewTableRow).at(0).props().review.id).toBe(1)
    expect(wrapper.find(ReviewTableRow).at(1).props().review.id).toBe(2)
    expect(wrapper.find(ReviewTableRow).at(2).props().review.id).toBe(3)
  })
})
