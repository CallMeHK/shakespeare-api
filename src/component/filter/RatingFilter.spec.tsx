import * as React from 'react'
import { shallow } from 'enzyme'
import * as ReviewContext from '../../context/review.context'
import RatingFilter from './RatingFilter'
import FormControl from '@material-ui/core/FormControl'

// I have run out of time.  Ideally, i would test the function of both selects and their interaction
// with the context filters, and the individual filter functions.
describe('RatingFilter', () => {
  beforeEach(() => {
    jest.spyOn(ReviewContext, 'useReviewContext').mockImplementation(
      () =>
        ({
          filter: {
            date: {
              set: jest.fn(),
            },
          },
        } as any)
    )
  })
  describe('#RatingFilter', () => {
    it('will mount', () => {
      const wrapper = shallow(<RatingFilter />)
      expect(wrapper.find(FormControl).exists()).toBe(true)
    })
  })
})
