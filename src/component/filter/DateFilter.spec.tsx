import * as React from 'react'
import DateFilter, { buildDateFilter } from './DateFilter'
import { shallow } from 'enzyme'
import * as ReviewContext from '../../context/review.context'
import DatePicker from './DatePicker'

describe('DateFilter', () => {
  describe('#DateFilter', () => {
    let filterDateSetStub: any
    beforeEach(() => {
      filterDateSetStub = jest.fn()
      jest.spyOn(ReviewContext, 'useReviewContext').mockImplementation(
        () =>
          ({
            filter: {
              date: {
                set: filterDateSetStub,
              },
            },
          } as any)
      )
    })

    describe('setting min date', () => {
      describe('date not valid', () => {
        it('should not set date', () => {
          const wrapper = shallow(<DateFilter />)
          wrapper.find(DatePicker).at(0).props().onChange(undefined)
          wrapper.update()
          expect(filterDateSetStub).not.toHaveBeenCalled()
        })
      })
      describe('date valid', () => {
        it('should not set date', () => {
          const wrapper = shallow(<DateFilter />)
          wrapper.find(DatePicker).at(0).props().onChange(new Date())
          wrapper.update()
          expect(filterDateSetStub).toHaveBeenCalled()
        })
      })
    })

    describe('setting max date', () => {
      describe('date not valid', () => {
        it('should not set date', () => {
          const wrapper = shallow(<DateFilter />)
          wrapper.find(DatePicker).at(1).props().onChange(undefined)
          wrapper.update()
          expect(filterDateSetStub).not.toHaveBeenCalled()
        })
      })

      describe('date valid', () => {
        it('should not set date', () => {
          const wrapper = shallow(<DateFilter />)
          wrapper.find(DatePicker).at(1).props().onChange(new Date())
          wrapper.update()
          expect(filterDateSetStub).toHaveBeenCalled()
        })
      })
    })
  })

  // ideally i would have more time to test the filter function rather than just the actual filter
  describe('#buildDateFilter', () => {
    it('should filter out invalid dates', () => {
      const reviews = [
        { publish_date: new Date('01/01/1995').toDateString() },
        { publish_date: new Date('01/01/1985').toDateString() },
        { publish_date: new Date('01/01/2005').toDateString() },
      ] as any[]

      const result1 = buildDateFilter(null, null)(reviews)
      const result2 = buildDateFilter(null, new Date('01/01/2000'))(reviews)
      const result3 = buildDateFilter(new Date('01/01/1990'), null)(reviews)
      const result4 = buildDateFilter(
        new Date('01/01/1990'),
        new Date('01/01/2000')
      )(reviews)

      expect(result1).toEqual(reviews)
      expect(result2).toEqual([
        { publish_date: new Date('01/01/1995').toDateString() },
        { publish_date: new Date('01/01/1985').toDateString() },
      ])
      expect(result3).toEqual([
        { publish_date: new Date('01/01/1995').toDateString() },
        { publish_date: new Date('01/01/2005').toDateString() },
      ])
      expect(result4).toEqual([
        { publish_date: new Date('01/01/1995').toDateString() },
      ])
    })
  })
})
