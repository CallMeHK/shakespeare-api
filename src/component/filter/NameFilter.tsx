import * as React from 'react'
import { css } from '@emotion/css'
import TextField from '@material-ui/core/TextField'
import { useReviewContext } from '../../context/review.context'
import { CustomerReview } from '../../services/review.api'

const filterBySubstring = (text: string) => (review: CustomerReview) => {
  const names = review.author.split(' ')
  for (const name of names) {
    if (name.toLowerCase().includes(text.toLowerCase())) return true
  }
  return false
}

const buildSearchTextFilter = (text: string) => (list: CustomerReview[]) =>
  list.filter(filterBySubstring(text))

let timeout: any

const runWithTimeout = (fn: Function) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    fn()
  }, 500)
}

const NameFilter: React.FC = () => {
  const { filter } = useReviewContext()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    runWithTimeout(() => {
      event.target.value
        ? filter.name.set(buildSearchTextFilter(event.target.value))
        : filter.name.clear()
    })
  }
  return (
    <div className={nameFilterContainerStyle}>
      <TextField label="Author" onChange={onChange} />
    </div>
  )
}

const nameFilterContainerStyle = css({
  padding: '5px 10px',
})

export default NameFilter
