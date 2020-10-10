import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import '../Apply.scss'

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
            <div className={'FormContainer'}>
                    <div className={'section'}>
                        <FormControl className={'multiLineInputContainer'}>
                            <FormLabel>Did you ever take part in a voluntary program? Please describe</FormLabel>
                            <TextField
                                className={'multiLineInput'}
                                fullWidth
                                id="outlined-multiline-static"
                                label="Write your answer here"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={(event) => setVoluntary(event.target.value)}
                            />
                        </FormControl>
                    </div>

                    <div className={'section'}>
                        <FormControl className={'multiLineInputContainer'}>
                            <FormLabel>
                                Why would you like to join DSC? (Interests , projects you want to promote
                                etc.)
                            </FormLabel>
                            <TextField
                                className={'multiLineInput'}
                                fullWidth
                                id="outlined-multiline-static"
                                label="Write your answer here"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={(event) => setWhyJoin(event.target.value)}
                            />
                        </FormControl>
                    </div>
            </div>
        </>
    )
}
