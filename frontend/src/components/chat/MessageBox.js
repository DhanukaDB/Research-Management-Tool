import * as React from 'react';
import Box from '@mui/material/Box';

export default function MessageBox() {
    return (
        <Box
            sx={{
                width: 550,
                height: 350,
                backgroundColor: 'primary.dark',
                borderRadius: '2px',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
        </Box>
    )
}
