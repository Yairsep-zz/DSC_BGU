import React, { useState } from 'react'
import './Contact.scss'
import { useFirestore } from 'reactfire'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Footer from '../../components/Footer'
import GoogleIntegration from '../../components/GoogleIntegration'
import ClubSocialIcons from '../../components/ClubSocialIcons'

function Contact() {
  const ContactUs_Collection = useFirestore().collection('Contact Us')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function Send() {
    ContactUs_Collection.add({
      Name: name,
      Email: email,
      Message: message,
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="leftSide-col">
            <br />
            <h1><b>Contact Us!</b></h1>
            <div className="google">
              <GoogleIntegration />
            </div>
            <form>
              <FormControl>
                <InputLabel style={{ fontSize: 15 }}>Name</InputLabel>
                <Input
                  id="FullName"
                  placeholder="Enter your full name"
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel style={{ fontSize: 15 }} htmlFor="my-input">Email address</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <FormHelperText
                  style={{ padding: 15, paddingTop: 2 }}
                  id="my-helper-text"
                >
                  We&apos;ll never share your email.
                </FormHelperText>
              </FormControl>
              <br />

              <FormControl>
                <FormLabel style={{ padding: 10 }}>What would you like to tell us?</FormLabel>
                <TextField
                  id="outlined-multiline-static"
                  label="Write your answer here"
                  multiline
                  rows={4}
                  variant="outlined"
                  onChange={(event) => setMessage(event.target.value)}
                />
              </FormControl>
              <div>
                <br />
                <Button color="primary" variant="outlined" size="large" onClick={Send}>
                  Send
                </Button>
                <ClubSocialIcons />
              </div>
            </form>
          </div>
        </div>
        <div className="col-6">
          <div className="rightSide-col">
            <div className="hidden-md">
              <img alt="contact" src="/pictures/content/contact.png" width="400px" height="400px" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Contact
