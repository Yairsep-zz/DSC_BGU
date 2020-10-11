import React from 'react'
import './Home.scss'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Bubbles from '../../components/Bubbles/Bubbles'
import Icon from "@material-ui/core/Icon";

function Home() {
  return (
    <div className="home">
      <div className={'logos'}>
        <img alt="googleDevelopers" className="dsc" src="/pictures/logos/developer_student_clubs.png"/>
        <img alt="googleDevelopers" className="googleDevelopers" src="/pictures/logos/google_developers.png"/>
      </div>
      <div className={'content'}>
        <div className="left">
          <h2>What is DSC?</h2>
          <p style={{ fontSize: 20, marginTop: 14, textAlign: 'left' }}>
            Developer Student Clubs are university-based community groups for students that aim to bridge the gap between theory and practice
            in academia while collaborating with local businesses, contributing to the community,
            and carrying out practical projects in diverse fields.
          </p>
          <br />
          <h2>Who can join DSC?</h2>
          <p style={{ fontSize: 20, marginTop: 14, textAlign: 'left' }}>
            We are looking for passionate students, who are self-motivated and eager to learn new Skills.
            Prior coding experience is not mandatory.
            If you have a great idea for an impactful project - DSC is your home!
          </p>
          <br />
          <h2>Why should I join DSC?</h2>
          <p style={{ fontSize: 20, marginTop: 14, textAlign: 'left' }}>
            We are always being told we should "Step out of the crowd" - DSC is your path to do so.
            <br/>
            As part of the program, we will be exposed to many technologies relevant to the high-tech industry,
            take part in code workshops, guest lectures by Google Experts through collaborations with high-tech companies
            and universities abroad and more.
          </p>
          <br />
          <Link to="/Apply" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="secondary" endIcon={<Icon>send</Icon>}>
              Join DSC BGU
            </Button>
          </Link>
        </div>
        <div className="right">
          <img alt="home_why" className="image" src="/pictures/content/home-why.png" />
        </div>
      </div>
      <Bubbles />
    </div>
  )
}

export default Home
