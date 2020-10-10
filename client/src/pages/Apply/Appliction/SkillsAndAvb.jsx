import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {  Input } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import '../Apply.scss'
export default function SkillsAndAvb({
                                         data: {
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

                                             // ,
                                             // programingLanguages = ['Java', 'Python', 'C++'],
                                             // webDev = ['React', 'Vue', 'Angular', 'Node.js'],
                                             // mobileDev = ['React Native', 'Flutter', 'Kotlin'],
                                             // googleTech = ['Firebase', 'Google Cloud Platform', 'TensorFlow'],
                                             // versionControl = ['Git'],
                                             // skills = ['Machine Learning', 'Cyber Security'],
                                             // availableDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
                                         },


                                     })

{
    const programingLanguages = ['Java', 'Python', 'C++', 'Node.js', 'Go','Other']
    const webDev = ['React', 'Vue', 'Angular','JQuery']
    const mobileDev = ['React Native', 'Flutter', 'Kotlin']
    const googleTech = ['Firebase', 'Google Cloud Platform', 'TensorFlow']
    const versionControl = ['Git', 'Docker', 'CI/CD']
    const skills = ['Machine Learning', 'Cyber Security','AWS', 'SQL']
    const availableDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

    const handleTechToggle = (skill) => () => {
        const currentIndex = skillList.indexOf(skill)
        const newSkillList = [...skillList]

        if (currentIndex === -1) {
            newSkillList.push(skill)
        }
        else {
            newSkillList.splice(currentIndex, 1)
        }
        setSkillList(newSkillList)
    }

    const handleDaysToggle = (day) => () => {
        const currentIndex = dayList.indexOf(day)
        const newDayList = [...dayList]

        if (currentIndex === -1) {
            newDayList.push(day)
        }
        else {
            newDayList.splice(currentIndex, 1)
        }

        setDayList(newDayList)
    }
    return (
        <>
            <div className={'FormContainer'}>
                <div className={'section'}>
                    <FormLabel>Choose your major</FormLabel>
                    <Select fullWidth={1} onChange={({ target: { value } }) => setMajor(value)}>
                        <MenuItem value="Computer Science">Computer Science</MenuItem>
                        <MenuItem value="Software Engineering">Software Engineering</MenuItem>
                        <MenuItem value="Industrial Engineering and Management">Industrial Engineering and Management</MenuItem>
                        <MenuItem value="Software and Information Systems Engineering">Software and Information Systems Engineering</MenuItem>
                        <MenuItem value="Management Information Systems Engineering">Management Information Systems Engineering</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    {major == 'Other' ? (
                                <div>
                                    <FormControl>
                                        <InputLabel>Major</InputLabel>
                                        <Input fullWidth={1}
                                            id="OtherMajor"
                                            placeholder="Enter your Major"
                                            onChange={(event) => setOtherMajor(event.target.value)}
                                        />
                                    </FormControl>
                                </div>
                            )
                            : <div />
                    }
                </div>
                <div  className={'section'}>
                    <FormLabel>What are your available days?</FormLabel>
                        <FormControl>
                            <FormGroup className={'MultipleSelect'}>
                                {availableDays.map((day) => (
                                    <FormControlLabel
                                        control={<Checkbox name={day} onClick={handleDaysToggle(day)} />}
                                        label={`${day} After 18:00`}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                </div>
                <InputLabel>Technical Skills (Optional)</InputLabel>
                <div  className={'section'}>
                    <FormControl className={'TechnicalSkillSelect'}>
                        <FormLabel>Programing Languages</FormLabel>
                        <FormGroup>
                            {programingLanguages.map((skill) => (
                                <FormControlLabel
                                    control={<Checkbox name={skill} />}
                                    label={skill}
                                    onClick={handleTechToggle(skill)}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <FormControl className={'TechnicalSkillSelect'}>
                        <FormLabel>Web Development</FormLabel>
                        <FormGroup>
                            {webDev.map((skill) => (
                                <FormControlLabel
                                    control={<Checkbox name={skill} />}
                                    label={skill}
                                    onClick={handleTechToggle(skill)}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <FormControl className={'TechnicalSkillSelect'}>
                        <FormLabel>Mobile Development</FormLabel>
                        <FormGroup>
                            {mobileDev.map((skill) => (
                                <FormControlLabel
                                    control={<Checkbox name={skill} />}
                                    label={skill}
                                    onClick={handleTechToggle(skill)}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <FormControl className={'TechnicalSkillSelect'}>
                        <FormLabel>Version Control and Deployment</FormLabel>
                        <FormGroup>
                            {versionControl.map((skill) => (
                                <FormControlLabel
                                    control={<Checkbox name={skill} />}
                                    label={skill}
                                    onClick={handleTechToggle(skill)}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <FormControl className={'TechnicalSkillSelect'}>
                        <FormLabel>Google Techs</FormLabel>
                        <FormGroup>
                            {googleTech.map((skill) => (
                                <FormControlLabel
                                    control={<Checkbox name={skill} />}
                                    label={skill}
                                    onClick={handleTechToggle(skill)}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <FormControl className={'TechnicalSkillSelect'}>
                        <FormLabel>Other</FormLabel>
                        <div>
                            <FormGroup>
                                {skills.map((skill) => (
                                    <FormControlLabel
                                        control={<Checkbox name={skill} />}
                                        label={skill}
                                        onClick={handleTechToggle(skill)}
                                    />
                                ))}
                            </FormGroup>
                        </div>
                    </FormControl>
                </div>
            </div>
        </>
    )
}
