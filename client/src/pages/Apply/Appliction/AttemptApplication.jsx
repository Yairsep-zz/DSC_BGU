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

const programingLanguages = ['Java', 'Python', 'C++']
const webDev = ['React', 'Vue', 'Angular', 'Node.js']
const mobileDev = ['React Native', 'Flutter', 'Kotlin']
const googleTech = ['Firebase', 'Google Cloud Platform', 'TensorFlow']
const versionControl = ['Git']
const skills = ['Machine Learning', 'Cyber Security']
const availableDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

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
  const [shareWithUs, setShareWithUs] = useState('')
  const [displayOther, setDisplayOther] = useState(false)
  const [resume, setResume] = useState(null)
  const [dayList, setDayList] = useState([])
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => {
    if (activeStep === steps.length - 1){ Submit()}
    else{setActiveStep((prevActiveStep) => prevActiveStep + 1)}


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

    if (fullName.length < 5) {
      errors.push('Name should be at least 5 charcters long.')
    }

    if (email.length < 5) {
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

    if (resume == null) {
      errors.push('resume is missing.')
    }

    console.log('**********************')
    console.log(errors)
    if (errors.length === 0) {
      try {
        const storageRef = firebase.storage().ref('Resumes/')
        const fileRef = storageRef.child(`${fullName} CV`)
        await fileRef.put(resume).then(() => {
          console.log('Uploaded a file')
        })
        // TODO : fix cv, information in : https://firebase.google.com/docs/storage/web/create-reference
        await applications_Collection.add({
          Name: fullName,
          Email: email,
          PhoneNumber: phoneNumber,
          Major: otherMajor == '' ? major : otherMajor,
          Skills: skillList,
          Voluntary: voluntary,
          WhyJoin: whyJoin,
          ShareWithUs: shareWithUs,
          DaysAvailable: dayList,
          cv: fileRef.fullPath,
        })

        history.push('/Apply/Success')
        console.log('Submit clicked')
      }
      catch (e) {
        history.push('/Apply/Failed')
      }
    }
    else {
      console.log(errors)
      alert (errors)
    }
  }

  return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
          ))}
        </Stepper>
        <div style={{display: "flex"}}>
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
        {console.log("!!!!!")}
        {console.log(errors)}
      </div>
  )
}
