import React from 'react'
import Typography from '@material-ui/core/Typography'
import Application from './Appliction/Application'
import Footer from '../../components/Footer'

function Apply() {
  return (
    <div>
      <Typography variant="h2" gutterBottom className="header">
        Club Member Application
      </Typography>
      <Application />
      <Footer />
    </div>
  )
}

export default Apply
