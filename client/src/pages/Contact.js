import React from "react";
import {Form, InputGroup, Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFirestore} from "reactfire";

function Contact() {

    const ContactUs_Collection = useFirestore().collection("Contact Us");

    function Submit() {
        ContactUs_Collection.add({
            Name: "Yair",
            Email: "Yairsep@gmail.com",
            Message: "Blalalalavasd",
        })
        console.log("Submit clicked")
    }

    return (
        <div>
            <h1>Contact Us</h1>

            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name"/>
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email"/>
                </Form.Group>

                <Form.Group controlId="formGridPhoneNumber">
                    <Form.Label>Tell us</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea"/>
                </Form.Group>

                <Button onClick={Submit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;
