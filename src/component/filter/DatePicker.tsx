import * as React from 'react'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

type IDatePicker = {
  date: Date | null
  onChange: (date: Date | null) => void
  label: string
}

const DatePicker: React.FC<IDatePicker> = ({ date, onChange, label }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id={'date-picker-dialog' + label}
        label={label}
        format="MM/dd/yyyy"
        value={date}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
