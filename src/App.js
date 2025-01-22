// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/navbar";
import MainConsole from "./components/mainconsole";
import About from "./components/about";
import Footer from "./components/footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
     <NavBar/>
     <Routes>
          <Route path="/" element={<MainConsole/>}/>
          <Route path="/About" element={<About/>}/>
     </Routes>
     {/* <Footer/> */}
     </div>
     </Router>
  );
}

export default App;
