import React from 'react'
import { useAuth, useUser, AuthCheck } from 'reactfire'
import firebase from 'firebase'
import GoogleButton from 'react-google-button'
import Button from '@material-ui/core/Button'

function GoogleIntegration() {
  const auth = useAuth()
  const user = useUser()

  const signIn = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  const signOut = () => auth.signOut()

  return (
    <div>
      <AuthCheck fallback={(
        <GoogleButton
          onClick={signIn}
        />
)}
      >
        <div>
          Hello
          {' '}
          {user?.displayName}
          !
          <div>
            <Button variant="outlined" color="secondary" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </AuthCheck>
    </div>
  )
}

export default GoogleIntegration
