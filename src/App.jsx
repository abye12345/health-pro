import Header from "./header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./componet/componet.css";
import Home from "./componet/Home";
import Services from "./componet/Services";
import Resources from "./componet/Resources";
import About from "./componet/About";
import Signup from "./componet/Signup";
import Login from "./componet/Login";
import Footer from "./footer/Footer";
import Compren from "./componet/Compren";
import Convient from "./componet/Convient";
import Personalized from "./componet/Personalized";

function App() {
  const handleclick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const path = e.currentTarget.getAttribute("href"); // Get the href attribute
    window.location.href = path; // This will cause a full page reload
  };

  return (
    <>
      <Header />
      <Router>
        <nav>
          <ul>
            <li>
              <Link onClick={handleclick} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleclick} to="/Services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={handleclick} to="/Resources">
                Resources
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleclick}>
                About Us
              </a>
            </li>
            <li>
              <Link onClick={handleclick} to="/Signup">
                Sign Up
              </Link>
            </li>
            <li>
              <Link onClick={handleclick} to="/Login">
                Log in
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Resources" element={<Resources />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>

          <Route path="/Covient" element={<Convient />}></Route>
          <Route path="/Compren" element={<Compren />}></Route>
          <Route path="/Personalized" element={<Personalized />}></Route>
          <Route path="/Convient" element={<Convient />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
