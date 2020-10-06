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

function getSteps() {
  return ['Personal information', 'Skills and availability', 'Additional information']
}

export default function ApplicationStepper() {
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
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

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <PersonalInfo data={personalInfoData} />
      case 1:
        return 'What is an ad group anyways?'
      case 2:
        return 'This is the bit I really care about!'
      default:
        return 'Unknown stepIndex'
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
      <div>
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
