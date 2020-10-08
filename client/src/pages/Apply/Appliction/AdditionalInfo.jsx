import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {Input} from '@material-ui/core'
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

export default function AdditionalInformation(

    {
        data: {
            voluntary,
            setVoluntary,
            whyJoin,
            setWhyJoin
        },
    }) {


    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>

                    <div>
                        <FormControl>
                            <FormLabel>Did you ever take part in a voluntary program? Please describe</FormLabel>
                            <TextField
                                id="outlined-multiline-static"
                                label="Write your answer here"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={(event) => setVoluntary(event.target.value)}
                            />
                            {console.log(`Voluntary:${voluntary}`)}
                        </FormControl>
                    </div>
                </Grid>
                <Grid>
                    <div>
                        <FormControl>
                            <FormLabel>
                                Why would you like to join DSC? (Interests , projects you want to promote
                                etc.)
                            </FormLabel>
                            <TextField
                                id="outlined-multiline-static"
                                label="Write your answer here"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={(event) => setWhyJoin(event.target.value)}
                            />
                            {console.log(`Why join us:${whyJoin}`)}
                        </FormControl>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
