import React from 'react'
import Typography from '@material-ui/core/Typography'
import Application from './Appliction/AttemptApplication'

function Apply() {
  return (
    <div>
      <Typography variant="h2" gutterBottom className="header">
        Club Member Application
      </Typography>
      <Application />
    </div>
  )
}

export default Apply
