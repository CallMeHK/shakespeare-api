import * as React from 'react'
import { shallow } from 'enzyme'
import * as ReviewContext from '../../context/review.context'
import NameFilter from './NameFilter'
import TextField from '@material-ui/core/TextField'

// I have run out of time.  Ideally, i would test the function of the text box and its interaction
// with the context filters, and the individual filter functions.
describe('NameFilter', () => {
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
  describe('#NameFilter', () => {
    it('will mount', () => {
      const wrapper = shallow(<NameFilter />)
      expect(wrapper.find(TextField).exists()).toBe(true)
    })
  })
})
