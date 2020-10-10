import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { FormLabel, Input } from '@material-ui/core'
import '../Apply.scss'

export default function PersonalInfo({
                                       data: {
                                         fullName,
                                         setFullName,
                                         email,
                                         setEmail,
                                         phoneNumber,
                                         setPhoneNumber,
                                         setResume,
                                       },
                                     }) {
  return (
      <>
        <div className={'FormContainer'}>
          <div>
            <TextField
                required
                error={fullName!=='' && fullName.length<4}
                id="fullname"
                label="Full Name"
                fullWidth
                autoComplete="name"
                value={fullName}
                onChange={({ target: { value } }) => setFullName(value)}
            />
          </div>
          <div>
            <TextField
                required
                error={email !=='' && (email.length < 5 || email.search('@') === -1)}
                id="email"
                label="Email Address"
                fullWidth
                autoComplete="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div>
            <TextField
                error={phoneNumber !=='' && (phoneNumber.length < 9 || !(/^\d+$/.test(phoneNumber)))}
                type="number"
                required
                id="phone"
                label="Phone Number"
                fullWidth
                autoComplete="number"
                value={phoneNumber}
                onChange={({ target: { value } }) => setPhoneNumber(value)}
            />
          </div>
          <div>
            <div style={{
              marginTop: 16,
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
              <FormLabel
                  style={{ alignSelf: 'center' }}
              >
                Please Upload your resume *
              </FormLabel>
              <Input
                  type="file"
                  style={{
                    marginLeft: 5,
                  }}
                  onChange={({ target: { files } }) => setResume(files[0])}
              />
            </div>
          </div>
        </div>
      </>
  )
}
