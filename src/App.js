import { Router } from "@reach/router"
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview"
import Singleview from "./components/Singleview";
import { SearchContext } from "./contexts/context.js";
import "./App.scss";
import displayNotification from "./displaynotification";




function App() {

  var [value, setValue] = useState("");
  var [db, setDb] = useState({});
  var [picToggle ,setPictoggle] = useState(true);


  useEffect(() => {
    Notification.requestPermission(function(status) {
      console.log("Notification permission status: ", status)
    });
  },[]);

 

  useEffect(() => {
    if (!window.indexedDB) {
      console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }else {
      console.log("You can use IndexDB")

      // Let us open our database
      var request = window.indexedDB.open("movieLoversDB", 3);
      request.onerror = function(event) {
        console.log("there was an error")
        console.error("database error:", event.target.errorCode);
      };
      request.onsuccess = function(event) {
        setDb(event.target.result);
      }; 
      request.onupgradeneeded = function (event) {
        var database = event.target.result;
        var objectStore = database.createObjectStore("movies",{keyPath:"ssn",autoIncrement : true})

        objectStore.createIndex("id","id",{unique:true});

        objectStore.createIndex("point","point",{unique:false});

        // objectStore.transaction.oncomplete = function(event) {
        //   console.log("BARE ET ELLER ANDET",event)
        // }
      }
    }
  },[]);

  console.log(db)

  return (
    <SearchContext.Provider value={{value, setValue,db,setPictoggle}}>
      <div style={{backgroundImage:picToggle ? null : "none" }} className="App">
          <button className="App_notebtn" onClick={() => displayNotification("Now we got you, Muhahaha") } >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subscribe</button>
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
