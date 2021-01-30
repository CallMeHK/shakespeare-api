import * as React from 'react'
import RatingsVsTimeChart from './RatingsVsTimeChart'
import { shallow } from 'enzyme'
import * as ReviewContext from '../../context/review.context'
import { Scatter } from 'recharts'

describe('RatingsVsTimeChart', () => {
  beforeEach(() => {
    jest.spyOn(ReviewContext, 'useReviewContext').mockImplementation(
      () =>
        ({
          filter: {
            reviews: [
              { rating: 4, publish_date: '2016-09-05T23:25:47.642350Z' },
              { rating: 3, publish_date: '2016-09-04T23:25:47.642388Z' },
              { rating: 3, publish_date: '2016-08-02T23:25:47.655774Z' },
            ],
          },
        } as any)
    )
  })

  it('should render correct data for scatter plot', () => {
    const wrapper = shallow(<RatingsVsTimeChart />)
    expect(wrapper.find(Scatter).props().data).toEqual([
      { rating: 4, publish_date: 1473117947642 },
      { rating: 3, publish_date: 1473031547642 },
      { rating: 3, publish_date: 1470180347655 },
    ])
  })
})
