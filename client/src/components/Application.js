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

function Application() {

    const applications_Collection = useFirestore().collection("Applications");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [major, setMajor] = useState("");
    const [techSkills, setTechSkills] = useState("");
    const [voluntary, setVoluntary] = useState("");
    const [whyJoin, setWhyJoin] = useState("");
    const [shareWithUs, setShareWithUs] = useState("");
    const [displayOther, setDisplayOther] = useState(false);
    const [resume , setResume] = useState(null);

    const programingLanguages = ["Java", "Python", "C++"];
    const webDev = ["React", "Vue", "Angular", "Node.js"];
    const mobileDev = ["React Native", "Flutter", "Kotlin"];
    const googleTech = ["Firebase", "Google Cloud Platform", "TensorFlow"];
    const versionControl = ["Git"]
    const skills = ["Machine Learning", "Cyber Security"];
    const availableDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    const Submit = () => {
        applications_Collection.add({
            Name: fullName,
            Email: email,
            PhoneNumber: phoneNumber,
            Major: major,
            Skills: techSkills,
            Voluntary: voluntary,
            WhyJoin: whyJoin,
            ShareWithUs: shareWithUs
        })
        const storageRef = firebase.storage().ref("Resumes/");
        const fileRef = storageRef.child(fullName + " CV");
        fileRef.put(resume).then(() => {
            console.log("Uploaded a file")
        })
        console.log("Submit clicked")
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
            <form>
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
                            <MenuItem>Computer Science</MenuItem>
                            <MenuItem>Software Engineering</MenuItem>
                            <MenuItem>Industrial Engineering and Management</MenuItem>
                            <MenuItem>Software and Information Systems Engineering</MenuItem>
                            <MenuItem>Management Information Systems Engineering</MenuItem>
                            <MenuItem onClick={showOther}>Other</MenuItem>
                        </Select>
                        {console.log("major:" + major)}
                    </FormControl>
                </div>
                <FormControl controlId="formGridPhoneNumber">
                    {displayOther &&
                    <FormControl placeholder="Write Your Major" onChange={event => setMajor(event.target.value)}/>}
                </FormControl>

                <br/><br/><br/><br/>
                <InputLabel>Technical Skills (Optional)</InputLabel>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Programing Languages</FormLabel>
                    <FormGroup>
                        {programingLanguages.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Web Development</FormLabel>
                    <FormGroup>
                        {webDev.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Mobile Development</FormLabel>
                    <FormGroup>
                        {mobileDev.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Version Control</FormLabel>
                    <FormGroup>
                        {versionControl.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Google Techs</FormLabel>
                    <FormGroup>
                        {googleTech.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Other</FormLabel>
                    <FormGroup>
                        {skills.map((skill) => (
                            <FormControlLabel
                                control={<Checkbox name={skill}/>}
                                label={skill}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <div>
                    <FormControl>
                        <FormLabel>What are your available days?</FormLabel>
                        <FormGroup row>
                            {availableDays.map((day) => (
                                <FormControlLabel
                                    control={<Checkbox name={day}/>}
                                    label={day + " After 18:00"}
                                />
                            ))}
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

            </form>

        </div>
    );
}

export default Application;

