import * as React from 'react'
import ReviewContextProvider, { ReviewContext } from './review.context'
import * as ReviewService from '../services/review.api'
import * as useFilteredReviews from '../hooks/useFilteredReviews'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'

// I probably should have use React testing library for this, enzyme has cases where it doesnt do the job quite as well.
describe('review.context', () => {
  let reviews: any
  let fetchAllReviewsStub: any
  beforeEach(() => {
    fetchAllReviewsStub = jest.spyOn(ReviewService, 'fetchAllReviews')
    jest
      .spyOn(useFilteredReviews, 'default')
      .mockImplementation(() => ({} as any))
    reviews = [
      {
        id: 'id',
        author: 'testAuthor',
        rating: 2,
        publish_date: '2016-08-02T23:25:47.655774Z',
      },
    ]
  })
  it('should set reviews on success', async () => {
    fetchAllReviewsStub.mockImplementation(() => ({
      success: true,
      data: reviews,
    }))

    const wrapper = mount(
      <ReviewContextProvider>
        <ReviewContext.Consumer>
          {(value: any) => (
            <>
              <div>{!value.isLoading && 'not loading'}</div>
              <div>{value.reviews[0]?.author}</div>
            </>
          )}
        </ReviewContext.Consumer>
      </ReviewContextProvider>
    )

    await act(async () => {
      await wrapper.update()
    })

    expect(wrapper.find('div').at(0).text()).toBe('not loading')
    expect(wrapper.find('div').at(1).text()).toBe('testAuthor')
  })

  it('should set isError on fail', async () => {
    fetchAllReviewsStub.mockImplementation(() => ({
      success: false,
    }))

    const wrapper = mount(
      <ReviewContextProvider>
        <ReviewContext.Consumer>
          {(value: any) => (
            <>
              <div>{value.isError && 'error'}</div>
            </>
          )}
        </ReviewContext.Consumer>
      </ReviewContextProvider>
    )

    await act(async () => {
      await wrapper.update()
    })

    expect(wrapper.find('div').text()).toBe('error')
  })
})
