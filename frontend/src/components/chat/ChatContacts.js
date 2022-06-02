import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                IT20456321
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Perera K.C.S
            </Typography>
        </CardContent>
    </React.Fragment>
);


export default function ChatContacts() {
    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
            </Box>
        </>
    )
}

