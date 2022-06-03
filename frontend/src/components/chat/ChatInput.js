import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

export default function ChatInput() {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 900 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type your message here..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
}
