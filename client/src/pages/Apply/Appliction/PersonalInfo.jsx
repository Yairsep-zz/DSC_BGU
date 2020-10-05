import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { FormLabel, Input } from '@material-ui/core'

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="fullname"
            label="Full Name"
            fullWidth
            autoComplete="name"
            value={fullName}
            onChange={({ target: { value } }) => setFullName(value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="number"
            required
            id="phone"
            label="Phone Number"
            fullWidth
            autoComplete="number"
            value={phoneNumber}
            onChange={({ target: { value } }) => setPhoneNumber(value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{
            marginTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
          }}
          >
            <FormLabel
              style={{ alignSelf: 'center' }}
            >
              Please Upload your resume
            </FormLabel>
            <Input
              type="file"
              style={{
                marginLeft: 5,
              }}
              onChange={({ target: { files } }) => setResume(files[0])}
            />
          </div>
        </Grid>
      </Grid>
    </>
  )
}
