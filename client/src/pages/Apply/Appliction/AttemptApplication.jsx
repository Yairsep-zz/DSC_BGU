import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFirestore } from 'reactfire'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import { Container } from '@material-ui/core'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PersonalInfo from './PersonalInfo'
import SkillsAndAvb from './SkillsAndAvb'
import AdditionalInformation from "./AdditionalInfo";
import { useHistory } from 'react-router-dom'
import * as firebase from 'firebase'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: spacing(1),
  },
  instructions: {
    marginTop: spacing(1),
    marginBottom: spacing(1),
  },
  buttonsContainer: {
    marginTop: spacing(5),
  },
}), { name: 'ApplicationStepper' })

let errors = []

function getSteps() {
  return ['Personal information', 'Skills and availability', 'Additional information']
}

export default function ApplicationStepper() {
  const history = useHistory()
  const classes = useStyles()
  const applications_Collection = useFirestore().collection('Applications')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [major, setMajor] = useState('')
  const [otherMajor, setOtherMajor] = useState('')
  const [skillList, setSkillList] = useState([])
  const [voluntary, setVoluntary] = useState('')
  const [whyJoin, setWhyJoin] = useState('')
  const [displayOther, setDisplayOther] = useState(false)
  const [resume, setResume] = useState(null)
  const [dayList, setDayList] = useState([])
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const CheckPersonalInfo = () =>{
    if (fullName === ''){
      alert('Please Enter your Full Name')
      return false
    }
    if (fullName.length < 4) {
      alert('Name should be at least 4 characters long.')
      return false
    }
    if (email === ''){
      alert('Please Enter your Email')
      return false
    }
    if (email.length < 5) {
      alert('Email should be at least 5 characters long.')
      return false
    }
    if(email.search('@') === -1){
      alert('Please Enter a valid Email')
      return false
    }
    if (phoneNumber === ''){
      alert('Please Enter your phone number')
      return false
    }
    if (phoneNumber.length < 9) {
     alert('Phone Number should be at least 9 characters long.')
      return false
    }
    if (!(/^\d+$/.test(phoneNumber))) {
     alert('Phone Number should contain only numbers.')
      return false
    }
    if (resume == null) {
      alert('resume is missing.')
      return false
    }
    if (!resume.name.endsWith('.pdf') && !resume.name.endsWith('.doc') && !resume.name.endsWith('.docx')) {
      alert('please upload PDF / WORD file')
      return false
    }
    return true
  }

  const handleNext = () => {
    if (activeStep === steps.length - 1){ Submit()}
    else{setActiveStep((prevActiveStep) =>{
      if (prevActiveStep === 0 && !CheckPersonalInfo()){
        return prevActiveStep
      }
      if(prevActiveStep === 1){
        if ((major == 'Other' && otherMajor.length === 0) || (major.length === 0)) {
          alert("Major can't be empty.");
          return prevActiveStep
        }
      }
      return prevActiveStep + 1
    })}
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const personalInfoData = {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    resume,
    setResume,
  }

  const SkillsAndAvbData = {
    major,
    setMajor,
    otherMajor,
    setOtherMajor,
    skillList,
    setSkillList,
    displayOther,
    setDisplayOther,
    dayList,
    setDayList
  }

  const AdditionalInformationData = {
    voluntary,
    setVoluntary,
    whyJoin,
    setWhyJoin
  }
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <PersonalInfo data={personalInfoData} />
      case 1:
        return <SkillsAndAvb data={SkillsAndAvbData} />
      case 2:
        return <AdditionalInformation data={AdditionalInformationData}/>
      default:
        return 'Unknown stepIndex'
    }
  }



  const Submit = async () => {
    errors = []
    if (fullName.length < 4) {
      errors.push('Name should be at least 5 charcters long.')
    }

    if (email.length < 4) {
      errors.push('Email should be at least 5 charcters long.')
    }
    if (email.split('').filter((x) => x === '@').length !== 1) {
      errors.push('Email should contain a @.')
    }
    if (email.indexOf('.') === -1) {
      errors.push('Email should contain at least one dot.')
    }

    if (phoneNumber.length < 9) {
      errors.push('Phone Number should be at least 9 characters long.')
    }
    if (!(/^\d+$/.test(phoneNumber))) {
      errors.push('Phone Number should containt only numbers.')
    }

    if ((major == 'Other' && otherMajor.length === 0) || (major.length === 0)) {
      errors.push("Majr can't be empty.")
    }

    if (whyJoin === 0) {
      errors.push("WhyJoin can't be empty.")
    }



    if (errors.length === 0) {
      try {
        const storageRef = firebase.storage().ref('Resumes/')
        const fileRef = storageRef.child(`${fullName} CV - ${Date.now().toString()}`)
        await fileRef.put(resume)
        // TODO : fix cv, information in : https://firebase.google.com/docs/storage/web/create-reference
        await applications_Collection.add({
          Name: fullName,
          Email: email,
          PhoneNumber: phoneNumber,
          Major: otherMajor == '' ? major : otherMajor,
          Skills: skillList,
          Voluntary: voluntary,
          WhyJoin: whyJoin,
          DaysAvailable: dayList,
          cv: fileRef.fullPath,
        })

        history.push('/Apply/Success')
      }
      catch (e) {
        history.push('/Apply/Failed')
      }
    }
    else {
      console.log(errors)
      alert('There is a problem with the data you sent, please recheck yourself')
    }
  }

  return (
      <div className={"ApplicationStepper"}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
          ))}
        </Stepper>
        <div className={'stepContainer'}>
          {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed! Your application has been submited
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
          ) : (
              <div>
                <Container>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div className={classes.buttonsContainer}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </Container>
              </div>
          )}
        </div>
      </div>
  )
}
