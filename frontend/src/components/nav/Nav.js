import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const ITEMS = ["Chat", "Group", "Evaluations"];

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#063970' }}>
                <Toolbar>
                    <Typography sx={{ fontSize: "1.5rem", paddingRight: "10%" }} >SLIIT RESEARCH</Typography>
                    {
                        isMatch ? (
                            <>
                                <Drawer />
                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="primary"
                                >
                                    {
                                        ITEMS.map((page, index) => (
                                            <Tab key={index} label={page} />
                                        ))
                                    }
                                </Tabs>
                                <Button href="/EvaluationsHome" sx={{ marginLeft: "1%", marginRight: "4%" }} variant='contained'>Evaluations</Button>
                                <Button href="/Cosupervisorsreq" sx={{ marginLeft: "1%", marginRight: "4%" }} variant='contained'>Request cosupervisor</Button>
                                <Button sx={{ marginLeft: 'auto' }} variant='contained'>Register</Button>
                                <Button href="/login" sx={{ marginLeft: "1%", marginRight: "4%" }} variant='contained'>Login</Button>
                            
                                <LogoutIcon />
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
