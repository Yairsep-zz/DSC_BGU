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

function AfterSubmit() {


    return (
        <div>
            <h1>Thank you for submitting.</h1>
            <br/>
            <h2>Good Lack!</h2>
               
        </div>
    );
}

export default AfterSubmit;
