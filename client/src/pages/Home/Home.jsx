import React from 'react'
import './Home.scss'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ClubSocialIcons from '../../components/ClubSocialIcons'
import Bubbles from '../../components/Bubbles/Bubbles'
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="leftSide-col">
            <h2>What is DSC?</h2>
            <p style={{ fontSize: 20, marginTop: 14, textAlign: 'left' }}>
              Developer Student Clubs are university based community
              groups for students interested in Google developer
              technologies. Students from all undergraduate or
              graduate programs with an interest in growing as a
              developer are welcome.
            </p>
            <br />
            <h2>Who can join DSC?</h2>
            <p style={{ fontSize: 20, marginTop: 14, textAlign: 'left' }}>
              We are looking for passionate students, who are self-motivated and eager to learn new Skills.
              Prior coding experience is not mandatory.
              If you have an idea for a great impactful project - DSC is your home!
            </p>
            <br />
            <h2>Why should I join DSC?</h2>
            <p style={{ fontSize: 20, marginTop: 14, textAlign: 'left' }}>
              We are always being told we should "Step out of the crowd".
              DSC is your path to do so.
            </p>
            <br />
            <Link to="/Apply" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large" color="primary">
                Join DSC BGU
              </Button>
            </Link>
            <ClubSocialIcons />
          </div>
        </div>
        <div className="col-6">
          <div className="rightSide-col">
            <img alt="home_why" className="image" src="/pictures/content/home-why.png" />
          </div>
        </div>
      </div>
      <Bubbles />
    </div>
  )
}

export default Home
