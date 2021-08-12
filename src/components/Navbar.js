import { navigate } from "@reach/router";
import { useContext, useState } from "react";
import { SearchContext } from "../contexts/context";
import "./Navbar.scss";

function Navbar() {


    var [inputValue , setInputValue] = useState("");
    var {setValue} = useContext(SearchContext);
    

    function inputChange(event) {
      setInputValue(event.target.value)
    };
    function formSubmit(event) {
      event.preventDefault();
      setValue(inputValue);
      navigate("/overview/");
      setInputValue("");
    }




    return (
      <div className="navbar">
        <div>
          <a href="/"><img className="navbar__logo" src="/logo.png" alt="" /></a>
        </div>
        <form  className="navbar__form" onSubmit={formSubmit} className="navbar__form">
         <input className="navbar__searchbar" value={inputValue} onChange={inputChange} type="search" name="" placeholder="Search Movies" id="" />
         <button className="navbar__button" type="submit"><svg className="navbar__icon" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg></button>
        </form>
          <p>A B C D E F . . . ...</p>
      </div>
    );
  }
  export default Navbar;
  