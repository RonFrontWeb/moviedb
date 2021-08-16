import { Router } from "@reach/router"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview"
import Singleview from "./components/Singleview";
import { SearchContext } from "./contexts/context.js";
import "./App.scss";
import displayNotification from "./displaynotification";




function App() {

  Notification.requestPermission(function(status) {
    console.log("Notification permission status: ", status)
  });


  var [value, setValue] = useState("")


  return (
    <SearchContext.Provider value={{value, setValue}}>
      <div className="App">
          <button className="App_notebtn" onClick={() => displayNotification("I made it!") } >Send Notification</button>
          <Navbar/>
        <Router>
          <Overview path="/overview"/>
          <Singleview path="/singleview/:id"/>
        </Router>
      </div>
    </SearchContext.Provider>
  );
}
export default App;
