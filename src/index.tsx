import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './component/App'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ReviewContextProvider from './context/review.context'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#47bdff',
          fontWeight: 'bold',
        },
      },

      focused: {},
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <ReviewContextProvider>
      <App />
    </ReviewContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
