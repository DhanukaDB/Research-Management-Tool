import React, { useState, useEffect } from "react";
import {  Button } from '@mui/material';
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";

const StaffHome = () => {



    return (
   
         <div>
        <Nav/>
        <br/><br/><br/><br/><br/>
    <center> <h1>
         Staff Home
     </h1>
     
     <Button href = "/supervisor" color="inherit">Supervisor</Button>
     <Button href = "/pannelmember" color="inherit">Pannel Member</Button>

    

     </center>
 </div>
    )

}

export default StaffHome


