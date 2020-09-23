import React from "react";
import {Form, InputGroup , Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFirestore} from "reactfire";

//TODO: Talk with Roei regarding bootstrap

function Application() {

    const applications_Collection = useFirestore().collection("Applications");

    function Submit() {
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
    }

    return (
        <div>
            <h1>Application</h1>
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
                    <Form.File
                        className="position-relative"
                        required
                        name="file"
                        label="File"
                        id="validationFormik107"
                        feedbackTooltip
                    />
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
                    {['checkbox'].map((type) => (
                        <div key={`custom-inline-${type}`} className="mb-3">
                            <Form.Check
                                custom
                                inline
                                label="Java"
                                type={type}
                                id={`custom-inline-${type}-1`}
                            />
                            <Form.Check
                                custom
                                inline
                                label="Python"
                                type={type}
                                id={`custom-inline-${type}-1`}
                            />
                        </div>
                    ))}
                </Form.Group>

                <Form.Group controlId="formGridPhoneNumber">
                    <Form.Label>Did you ever take part in a voluntary program? Please describe</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </Form.Group>

                <Button onClick={Submit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Application;
