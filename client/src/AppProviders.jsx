import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { FirebaseAppProvider } from 'reactfire'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { firebaseConfig } from './utils/firebaseConfig'
import theme from './lib/theme'
import App from './App'
import Footer from './components/Footer'

function AppProviders() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <div className="App">
          <Router>
            <NavigationBar />
            <App />
          </Router>
        </div>
        <Footer />
      </FirebaseAppProvider>
    </MuiThemeProvider>
  )
}

export default AppProviders
