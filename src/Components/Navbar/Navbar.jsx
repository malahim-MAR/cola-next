// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         {/* Left Logo */}
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//         </div>

//         {/* Search Bar */}
//         <div className="search-box">
          
//           <input type="text" placeholder="Search" />
//         </div>

//         {/* Hamburger */}
//         <div className="hamburger" onClick={() => setOpen(!open)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className={`sidebar ${open ? "active" : ""}`}>
//         <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
//         <ul>
//           <li>Our Company</li>
//           <li>Brands</li>
//           <li>Sustainability</li>
//           <li>Activities</li>
//           <li>Channel Distributor Form</li>
//           <li>Careers</li>
//           <li>Contact Us</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Left Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✖
        </button>
        <ul>
          <li>All About Cola Next</li>
          <li>Brands</li>
          <li>Cola Next Talk</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
