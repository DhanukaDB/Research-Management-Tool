import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Drawer from "./Drawer";

export default function Nav() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const ITEMS = ["Chat", "Group", "Evaluations"];

  const logout = () => {
    if (localStorage.getItem("authToken") && localStorage.getItem("userRole")) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRole");
      window.location = "/";
    }
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "1.5rem", paddingRight: "10%" }}>
            SLIIT RESEARCH
          </Typography>
          {isMatch ? (
            <>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
              >
                {ITEMS.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button
                href="/EvaluationsHome"
                sx={{ marginLeft: "1%", marginRight: "4%" }}
                variant="contained"
              >
                Evaluations
              </Button>

              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Register
              </Button>
              {!localStorage.getItem("authToken") && (
                <Button
                  href="/login"
                  sx={{ marginLeft: "1%", marginRight: "4%" }}
                  variant="contained"
                >
                  Login
                </Button>
              )}

              {localStorage.getItem("authToken") && (
                <LogoutIcon
                style={{"marginLeft":"10px"}}
                  onClick={() => {
                    logout();
                  }}
                />
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
