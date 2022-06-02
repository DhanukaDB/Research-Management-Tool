import React from 'react';
import ChatInput from './ChatInput';

export default function MessageBox() {
    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
    )
}
