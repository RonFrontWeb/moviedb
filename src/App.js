import { Link, Router } from "@reach/router"
import Navbar from "./components/Navbar";
import Overview from "./components/Overview"
import Singleview from "./components/Singleview";

function App() {
  return (
    <div className="App">
        <Link to="/overview/">PRESS</Link>
        <Navbar/>
      <Router>
        <Overview path="/overview"/>
        <Singleview path="/singleview/:id"/>
      </Router>
    </div>
  );
}
export default App;
