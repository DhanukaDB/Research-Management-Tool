import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ChatInput() {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '90%',
                padding: "10%",
            }}
        >
            <TextField fullWidth label="Group ID" id="fullWidth" />
        </Box>
    );
}
