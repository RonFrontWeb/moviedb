import { useState } from "react";
import "./Navbar.scss";

function Navbar() {

    var [serchTerm, setSerchTerm] = useState({})

    return (
      <div className="navbar">
        <div>
          <h1 className="navbar__logo" >Logo</h1></div>
        <div>
          <input className="navbar__searchbar" type="search" name="" placeholder="Search Movies" id="" />
        </div>
          <p>A B C D E F . . . ...</p>
      </div>
    );
  }
  export default Navbar;
  