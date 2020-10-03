import React, {useState} from "react";
import {useFirestore} from "reactfire";
import * as firebase from "firebase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from '@material-ui/core/Input';
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import CreatableSelect from 'react-select/creatable';
import history from '../../../history';

function Application() {

    const applications_Collection = useFirestore().collection("Applications");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [major, setMajor] = useState("");
    const [otherMajor, setOtherMajor] = useState("");
    const [skillList, setSkillList] = useState([]);
    const [voluntary, setVoluntary] = useState("");
    const [whyJoin, setWhyJoin] = useState("");
    const [shareWithUs, setShareWithUs] = useState("");
    const [displayOther, setDisplayOther] = useState(false);
    const [resume , setResume] = useState(null);
    const [dayList, setDayList] = React.useState([]);
    const programingLanguages = ["Java", "Python", "C++"];
    const webDev = ["React", "Vue", "Angular", "Node.js"];
    const mobileDev = ["React Native", "Flutter", "Kotlin"];
    const googleTech = ["Firebase", "Google Cloud Platform", "TensorFlow"];
    const versionControl = ["Git"]
    const skills = ["Machine Learning", "Cyber Security"];
    const availableDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];


   


    const handleTechToggle = (skill) => () => {
        const currentIndex = skillList.indexOf(skill);
        const newSkillList = [...skillList];

        if (currentIndex === -1) {
            newSkillList.push(skill);
        } else {
            newSkillList.splice(currentIndex, 1);
        }
        setSkillList(newSkillList);
    };

    const handleDaysToggle = (day) => () => {
        const currentIndex = dayList.indexOf(day);
        const newDayList = [...dayList];

        if (currentIndex === -1) {
            newDayList.push(day);
        } else {
            newDayList.splice(currentIndex, 1);
        }

        setDayList(newDayList);
    };

    const Submit = async () => {
        try {
        const storageRef = firebase.storage().ref("Resumes/");
        const fileRef = storageRef.child(fullName + " CV");
        await fileRef.put(resume).then(() => {
            console.log("Uploaded a file")
        })
        // TODO : fix cv, information in : https://firebase.google.com/docs/storage/web/create-reference
        await applications_Collection.add({
            Name: fullName,
            Email: email,
            PhoneNumber: phoneNumber,
            Major: otherMajor == ""? major : otherMajor,
            Skills: skillList,
            Voluntary: voluntary,
            WhyJoin: whyJoin,
            ShareWithUs: shareWithUs,
            DaysAvailable: dayList,
            cv: fileRef.fullPath,
        })

        history.push('Apply/Success');
        //history.push('/Success');
        console.log("Submit clicked")
     } catch (e) {  
        history.push('Apply/Failed');

        }
    }

    const handleResume = (e) => {

        setResume(e.target.files[0])
    }
    const showOther = () => {
        setDisplayOther(true);
    }

    return (
        <div>
            <h1>Club Member Application</h1>
                <FormControl>
                    <InputLabel>Full Name</InputLabel>
                    <Input id="FullName" placeholder="Enter your full name"
                           onChange={event => setFullName(event.target.value)}/>
                    {console.log("Full Name:" + fullName)}
                </FormControl>
                <br/>


                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text"
                           onChange={event => setEmail(event.target.value)}/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    {console.log("Email:" + email)}
                </FormControl>
                <br/>

                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input placeholder="Enter your phone number"
                           onChange={event => setPhoneNumber(event.target.value)}/>
                    {console.log("Phone:" + phoneNumber)}
                </FormControl>
                <br/><br/>

                <FormControl>
                    <FormLabel>Please Upload your resume</FormLabel>
                    <Input type="file" onChange={handleResume}/>
                </FormControl>

                <div>

                    {/*TODO:FIX MAJOR*/}
                    <FormControl>

                        <FormLabel>Choose your major</FormLabel>
                        <Select onChange={event => setMajor(event.target.value)}>
                        <MenuItem value="Computer Science">Computer Science</MenuItem>
                            <MenuItem value="Software Engineering">Software Engineering</MenuItem>
                            <MenuItem value="Industrial Engineering and Management">Industrial Engineering and Management</MenuItem>
                            <MenuItem value="Software and Information Systems Engineering">Software and Information Systems Engineering</MenuItem>
                            <MenuItem value="Management Information Systems Engineering">Management Information Systems Engineering</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                            
                        </Select>
                        {console.log("major:" + major)}

                    </FormControl>
                </div>

                {
                     major=='Other'?
                     <div>
                        <FormControl>
                        <InputLabel>Major</InputLabel>
                        <Input id="OtherMajor" placeholder="Enter your Major"
                           onChange={event => setOtherMajor(event.target.value)}/>
                        </FormControl>
                        {console.log("Othermajor:" + otherMajor)}
                        </div>
                    :
                        <div/>
                }
                <FormControl>
                    {displayOther &&
                    <FormControl placeholder="Write Your Major" onChange={event => setMajor(event.target.value)}/>}
                </FormControl>

                <br/><br/><br/><br/>
                <InputLabel>Technical Skills (Optional)</InputLabel>
                <FormControl>
                    <FormLabel>Programing Languages</FormLabel>
                    <FormGroup>
                        {programingLanguages.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                                onClick={handleTechToggle(skill)}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Web Development</FormLabel>
                    <FormGroup>
                        {webDev.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                                onClick={handleTechToggle(skill)}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Mobile Development</FormLabel>
                    <FormGroup>
                        {mobileDev.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                                onClick={handleTechToggle(skill)}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Version Control</FormLabel>
                    <FormGroup>
                        {versionControl.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                                onClick={handleTechToggle(skill)}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Google Techs</FormLabel>
                    <FormGroup>
                        {googleTech.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                                onClick={handleTechToggle(skill)}
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>Other</FormLabel>
                    <div>
                    <FormGroup>
                        {skills.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                                onClick={handleTechToggle(skill)}
                            />
                        ))}
                        {console.log("Tech Skills:" + skillList)}
                    </FormGroup>
                    </div>

                </FormControl>

                <div>
                    <FormControl>
                        <FormLabel>What are your available days?</FormLabel>
                        <FormGroup row>
                            {availableDays.map((day) => (
                                <FormControlLabel
                                    control={<Checkbox name={day} onClick={handleDaysToggle(day)}/>}
                                    label={day + " After 18:00"}
                                />
                            ))}
                            {console.log("Available Days:" + dayList)}
                        </FormGroup>
                    </FormControl>

                </div>

                <div>
                    <FormControl>
                        <FormLabel>Did you ever take part in a voluntary program? Please describe</FormLabel>
                        <TextField
                            id="outlined-multiline-static"
                            label="Write your answer here"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={event => setVoluntary(event.target.value)}/>
                        {console.log("Voluntary:" + voluntary)}
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                        <FormLabel>Why would you like to join DSC? (Interests , projects you want to promote
                            etc.)</FormLabel>
                        <TextField
                            id="outlined-multiline-static"
                            label="Write your answer here"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={event => setWhyJoin(event.target.value)}/>
                        {console.log("Why join us:" + whyJoin)}
                    </FormControl>
                </div>

                <Button variant="outlined" size="large" color="primary" onClick={Submit}>
                    Submit
                </Button>
        </div>
    );
}

export default Application;
