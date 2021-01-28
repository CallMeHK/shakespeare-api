import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const AppBar = () => (
  <div>
    <MUIAppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          Shakespeare Reviews
        </Typography>
      </Toolbar>
    </MUIAppBar>
  </div>
)

export default AppBar
