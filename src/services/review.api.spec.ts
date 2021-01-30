import * as ReviewService from './review.api'

//@ts-ignore
global.fetch = () => {}

describe('review.api', () => {
  let fetchStub: any
  beforeEach(() => {
    fetchStub = jest.spyOn(global, 'fetch')
  })
  describe('#fetchAllReviews', () => {
    describe('success', () => {
      it('should succeed when request resolves', async () => {
        fetchStub.mockImplementation(() =>
          Promise.resolve({ json: () => ({}) })
        )
        const response = await ReviewService.fetchAllReviews()
        expect(response.success).toBe(true)
        expect(response.data).toEqual({})
      })
    })

    describe('fail', () => {
      it('should fail when request rejects', async () => {
        fetchStub.mockImplementation(() => Promise.reject({}))
        const response = await ReviewService.fetchAllReviews()
        expect(response.success).toBe(false)
      })
    })
  })
})
