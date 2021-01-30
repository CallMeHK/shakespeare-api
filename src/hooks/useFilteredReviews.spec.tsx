import { renderHook, act } from '@testing-library/react-hooks'
import useFilteredReveiws from './useFilteredReviews'
import useFilteredReviews from './useFilteredReviews'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] as any[]
describe('useFilteredReviews', () => {
  let nameFilter: any, ratingFilter: any, dateFilter: any
  beforeEach(() => {
    nameFilter = jest
      .fn()
      .mockImplementation((r: any) => r.filter((elt: any) => elt.id !== 1))
    ratingFilter = jest
      .fn()
      .mockImplementation((r: any) => r.filter((elt: any) => elt.id !== 2))
    dateFilter = jest
      .fn()
      .mockImplementation((r: any) => r.filter((elt: any) => elt.id !== 3))
  })
  describe('pipe works', () => {
    beforeEach(() => {})
    it('should filter out correct reviews', () => {
      const { result, rerender } = renderHook(() => useFilteredReveiws(data))

      act(() => {
        result.current.name.set(nameFilter)
        result.current.rating.set(ratingFilter)
        result.current.date.set(dateFilter)
      })

      rerender()

      expect(result.current.reviews).toEqual([{ id: 4 }, { id: 5 }])
      expect(nameFilter).toHaveBeenCalled()
      expect(ratingFilter).toHaveBeenCalled()
      expect(dateFilter).toHaveBeenCalled()
    })
  })
})
