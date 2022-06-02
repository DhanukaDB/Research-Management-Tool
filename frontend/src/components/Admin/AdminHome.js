import React from "react";
import Card from "./Card";
import cardDetails from "./CardDetails";
import './adminPanel.css';
import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material';

function Admin() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit">LogOut</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="admin-home">
        <div class="heading">Admin Panel</div>
        {cardDetails.map((cardDetails) => {
          return (
            <div>
              <Card
                key={cardDetails.id}
                name={cardDetails.name}
                img={cardDetails.img}
                navigate={cardDetails.navigate}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Admin;