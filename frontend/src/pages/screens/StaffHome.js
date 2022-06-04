import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StaffHome = () => {



    return (
        <div>
              <center>
      <br/><br/><br/><br/>
            <Link to="/supervisor"> <Button variant="info">Supervisor</Button></Link>
            <Link to="/pannelmember"> <Button variant="info">Pannel Member</Button></Link>
            </center>
        </div>
    )

}

export default StaffHome


