import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from './Drawer';
import logo from '../../asserts/logo.png';


export default function Nav() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const ITEMS = ["home", "chat", "group", "submissions", "Evaluations"];

  const logout = () => {
    if (localStorage.getItem("authToken") && localStorage.getItem("userRole")) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRole");
      window.location = "/";
    }
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <Typography sx={{ fontSize: "1.5rem", paddingRight: "10%" }} >
            <img src={logo} style={{ height: "50px", width: "50px", paddingTop: "10px" }} />
          </Typography>
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
                      <Tab key={index} label={page} href={` ${page}`} />
                    ))
                  }
                </Tabs>
                <Button href="/EvaluationsHome"  sx={{ marginLeft: "20px" }} variant='contained'>Evaluations</Button>

                <Button href="/Cosupervisorsreq" sx={{ marginLeft: "1%", marginRight: "4%" }} variant='contained'>CO SU Req</Button>
               
               
                {!localStorage.getItem("authToken") && (
                  <Button
                    href="/studentsignup"
                    sx={{ marginLeft: "10%" }}
                    variant="contained"
                  >
                    Signup
                  </Button>
                )}

                {!localStorage.getItem("authToken") && (
                  <Button
                    href="/studentsignin"
                    sx={{ marginLeft: "2%" }}
                    variant="contained"
                  >
                    Sign-in
                  </Button>
                )}

                {localStorage.getItem("authToken") && (
                  <LogoutIcon
                    style={{ marginRight: "2%" }}
                    onClick={() => {
                      logout();
                    }}
                  />
                )}



              </>
            )
          }

        </Toolbar >
      </AppBar >
    </React.Fragment >
  )
}