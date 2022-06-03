import './createChat.css';
import * as React from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function CreateChatGroups() {
    return (
        <div>
            <h2>Create Student Groups</h2>
            <div className='container-card'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <TextField id="group-id" label="Group ID" />
                    <TextField id="supervisor" label="Supervisor Name" />
                    <TextField id="co-supervisor" label="Co-supervisor Name" />
                    <TextField id="member-1" label="member-1 Name" />
                    <TextField id="member-2" label="member-2 Name" />
                    <TextField id="member-3" label="member-3 Name" />
                    <TextField id="member-4" label="member-4 Name" />
                </Box>
            </div>
            <Button variant="contained"> Create Groups</Button>
        </div>
    )
}
