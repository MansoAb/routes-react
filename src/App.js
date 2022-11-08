import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Info from "./Info";
import { useState } from "react";
import Contact from "./Contact";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

function App() {
  const [text, setText] = useState("home");

  return (
    <div className="contain">
      <header>
        <h1>Cover</h1>
        <div className="infoHeader">
          <Link
            to="/"
            onClick={() => setText("home")}
            className={`home ${text === "home" ? "target" : null}`}
          >
            Home
          </Link>
          <Link
            to="/info"
            onClick={() => setText("info")}
            className={`home ${text === "info" ? "target" : null}`}
          >
            Features
          </Link>
          <Link
            to="/contact"
            onClick={() => setText("contact")}
            className={`home ${text === "contact" ? "target" : null}`}
          >
            Contact
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
