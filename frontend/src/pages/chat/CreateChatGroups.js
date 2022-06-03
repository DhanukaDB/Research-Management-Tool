import './createChat.css';
import * as React from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function CreateChatGroups() {

    return (
        <div>
            <h2>Create Student Groups</h2>
            <div className='groups'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <TextField id="group-id" label="Group ID" />
                    <TextField id="supervisor" label="Supervisor ID" />
                    <TextField id="co-supervisor" label="Co-supervisor ID" />
                </Box>
                <h2>Members:</h2>
                <div>member-1:</div>
                <div>member-2:</div>
                <div>member-3:</div>
                <div>member-4:</div>
            </div>
            <Button variant="contained"> Create Groups</Button>
        </div>
    )
}
