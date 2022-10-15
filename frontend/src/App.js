import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Notice from "./components/Notice/Notice";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import JoinUs from "./components/JoinUs/JoinUs";
import Myaccount from "./components/MyAccount/MyAccount";
import Admin from "./components/Admin/Admin";

// import context
import { LightThemeContext } from "./context/LightThemeContext";

function App() {
  const [lightTheme, setLightTheme] = useState(true);

  return (
    <LightThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </LightThemeContext.Provider>
  );
}

export default App;
