import React , {useState} from "react";
import {Form, InputGroup , Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFirestore} from "reactfire";
import * as firebase from "firebase";


//TODO: Talk with Roei regarding bootstrap

function Application() {

    const applications_Collection = useFirestore().collection("Applications");

    const [fullName , setFullName] = useState("");
    const [email , setEmail] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [major , setMajor] = useState("");
    const [techSkills , setTechSkills] = useState("");
    const [voluntary , setVoluntary] = useState("");

    
    const Submit = () => {
        applications_Collection.add({
            Name: "Yair",
            Email: "Yairsep@gmail.com",
            PhoneNumber: "0543384997",
            Resume: "File here",
            Major: "CS",
            Skills: "React",
            Voluntary: "Scouts",
        })
        console.log("Submit clicked")
        uploadResume();
    }

    const uploadResume = (e) => {

        const storageRef = firebase.storage().ref("Resumes/");
        const file = e.target.files[0];
        // TODO: Make file name as "Yair Sepunaru CV"
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            console.log("Uploaded a file")
        })

    }

    const skills = ["Java" , "Python" , "C++" , "ML" , "Web Development" , "React" , "Vue" , "Angular" , "Node.js" , "Mobile Development" , "React Native" , "Flutter", "Kotlin" , "Git" , "Cyber Security"];

    return (
        <div>
            <h1>Club Member Application</h1>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Please Upload your resume</Form.Label>
                    <br/>
                    <input type="file" onChange={uploadResume}/>
                    {/*<Form.File*/}
                    {/*    className="position-relative"*/}
                    {/*    required*/}
                    {/*    name="file"*/}
                    {/*    label="File"*/}
                    {/*    id="validationFormik107"*/}
                    {/*    feedbackTooltip*/}
                    {/*/>*/}
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Choose your major</Form.Label>
                    <Form.Control as="select" custom>
                        <option>Computer Science</option>
                        <option>Software Engineering</option>
                        <option>Industrial Engineering and Management</option>
                        <option>Software and Information Systems Engineering</option>
                        <option>Management Information Systems Engineering</option>
                        <option>Other</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Label>Technical Skills</Form.Label>
                    {skills.map((skill) => (
                        <div  key={`inline-${skill}`} className="mb-3">
                        <Form.Check inline label={skill} type={"checkbox"} id={`custom-inline-${skill}-1`}/>
                        </div>
                    ))}

                </Form.Group>

                <Form.Group controlId="formGridPhoneNumber">
                    <Form.Label>Did you ever take part in a voluntary program? Please describe</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                {/*TODO: Fix Submit function*/}
                <Button onClick={Submit} variant="primary" type="submit">
                    Submit
                </Button>
                <br/><br/>

            </Form>
        </div>
    );
}

export default Application;
