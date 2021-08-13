import { Link, Router } from "@reach/router"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview"
import Singleview from "./components/Singleview";
import { SearchContext } from "./contexts/context.js";
import "./App.scss";
import Ani from "./components/Ani";




function App() {

  var [value, setValue] = useState("")


  return (
    <SearchContext.Provider value={{value, setValue}}>
      <div className="App">
          <Navbar/>
          <Ani/>
        <Router>
          <Overview path="/overview"/>
          <Singleview path="/singleview/:id"/>
        </Router>
      </div>
    </SearchContext.Provider>
  );
}
export default App;
