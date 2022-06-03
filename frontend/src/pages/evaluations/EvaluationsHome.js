
import React from 'react'
import { Button } from '@mui/material';


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
             
                <Button href="/EvaluationTopics" color="inherit">Topics Evaluation</Button>
                <Button href="/FilesList" color="inherit">Marking Schemes</Button>
                <Button href="/EvaluationDocs" color="inherit">Documents Evaluation</Button>

                <Button href="/EvaluationPres" color="inherit">Presentations Evaluation</Button>
               </center>
                <br/>
                <br/>
                <br/>
                <center>
                <h1>
                    Add Evaluations
                </h1>
                <Button href="/GiveFeedbackTopics" color="inherit">New Topics Evaluation</Button>
                {/* <Button href="/FilesList" color="inherit">Marking Schemes</Button> */}
                <Button href="/AddmarksDocs" color="inherit">New Documents Evaluation</Button>

                <Button href="/Addmarkspresentation" color="inherit">New Presentations Evaluation</Button>
                </center>
            </div>
        </>
    )
}
