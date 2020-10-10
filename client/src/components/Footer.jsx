import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Copyright } from '@material-ui/icons'

function Footer() {
  return (
      <footer style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 0,
      }}>
          <img alt="dsc_logo" src="/pictures/logos/dscLogo.png" width="100px" height="100px" />
          <h5>Developed by DSC BGU Core Team</h5>
          <Copyright fontSize="small" />
      </footer>
  )
}

export default Footer



// <Grid
// container
// alignItems="center"
// justify="center"
// style={{
// position: 'absolute',
// bottom: 0,
// width: '100%',
// }}
// >
// <Grid item>
// <div className="copyright-area" style={{ marginTop: '20px' }}>
// <div className="container">
// <div className="row h-50 justify-content-center align-items-center">
// <div
// className="col-lg-12 col-md-12"

// >
// <img alt="dsc_logo" src="/pictures/logos/dscLogo.png" width="100px" height="100px" />
// <h5>Developed by DSC BGU Core Team</h5>
// <Copyright fontSize="small" />
// </div>
// </div>
// </div>
// </div>
// </Grid>
// </Grid>
