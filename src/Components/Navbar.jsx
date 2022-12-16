import  React,{ useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  
  return (
    <div className="header">
      <div className="navbar">
          <div className="logo">SpaceX</div>
         <div className="right">
          <input type="text" placeholder="Search" className="search" />
         </div>
      </div>
    </div>
   
  );
};
export default Navbar;
