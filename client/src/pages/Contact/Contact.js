import React, {useState} from "react";
import {useFirestore} from "reactfire";
import GoogleIntegration from "../../components/GoogleIntegration";
import Footer from "../../components/Footer";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Contact() {

    const ContactUs_Collection = useFirestore().collection("Contact Us");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function Send() {
        ContactUs_Collection.add({
            Name: name,
            Email: email,
            Message: message,
        })
        console.log("Submit clicked")
    }

    return (
        <div>
            <h1>Contact Us</h1>
            <GoogleIntegration/>
            <form>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input id="FullName" placeholder="Enter your full name"
                           onChange={event => setName(event.target.value)}/>
                    {console.log("Name:" + name)}
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
                    <FormLabel>What would you like to tell us?</FormLabel>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write your answer here"
                        multiline
                        rows={4}
                        variant="outlined"
                        onChange={event => setMessage(event.target.value)}/>
                    {console.log("Voluntary:" + message)}
                </FormControl>
                <div>
                <Button variant="outlined" size="large" color="primary" onClick={Send}>
                    Send
                </Button>
                </div>
            </form>
            <Footer/>
        </div>
    );
}

export default Contact;
