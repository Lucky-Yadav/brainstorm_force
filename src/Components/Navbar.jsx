import  React from "react";

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
