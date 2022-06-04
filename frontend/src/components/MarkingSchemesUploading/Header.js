import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../nav/Nav';

const Header = () => {
   return (
      <div className="header">
       
       <Nav/>
         <nav>
            <NavLink activeClassName="active" to="/MarkingUploading" exact={true}>
               Marking Schemes
            </NavLink>
            <NavLink activeClassName="active" to="/FilesList">
               Uploaded Files List
            </NavLink>
         </nav>
      </div>
   );
};

export default Header;
