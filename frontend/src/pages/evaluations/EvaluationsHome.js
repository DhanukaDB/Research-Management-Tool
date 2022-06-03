
import React from 'react'
import Button from '@mui/material';


export default function EvaluationsHome() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <center>
                    <h1>
                        Evaluations
                    </h1>

                    <Button href="/EvaluationTopics" color="inherit" variant="contained">Topics Evaluation</Button>
                    <Button href="/FilesList" color="inherit" variant="outlined">Marking Schemes</Button>
                    <Button href="/EvaluationDocs" color="inherit" variant="contained">Documents Evaluation</Button>
                    <Button href="/EvaluationPres" color="inherit" variant="outlined">Presentations Evaluation</Button>
                    <Button href="/Cosupervisorsreq" color="inherit" variant="contained">Request CoSupervisors</Button>
                </center>
                <br />
                <br />
                <br />
                <center>
                    <h1>
                        Add Evaluations
                    </h1>
                    <Button href="/GiveFeedbackTopics" color="inherit" variant="contained">New Topics Evaluation</Button>
                    {/* <Button href="/FilesList" color="inherit">Marking Schemes</Button> */}
                    <Button href="/AddmarksDocs" color="inherit" variant="outlined">New Documents Evaluation</Button>

                    <Button href="/Addmarkspresentation" color="inherit" variant="contained">New Presentations Evaluation</Button>
                </center>
            </div>
        </>
    )
}
