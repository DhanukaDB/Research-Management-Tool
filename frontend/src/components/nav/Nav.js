import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from './Drawer';

export default function Nav() {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const ITEMS = ["Chat", "Group"];

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
                                <Button sx={{ marginLeft: 'auto' }} variant='contained'>Register</Button>
                                <Button sx={{ marginLeft: "1%", marginRight: "4%" }} variant='contained'>Login</Button>
                                <LogoutIcon />
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}