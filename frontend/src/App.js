import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Notice from "./components/Notice/Notice";
import NoticeView from "./components/Notice/NoticeView";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import JoinUs from "./components/JoinUs/JoinUs";
import Myaccount from "./components/MyAccount/MyAccount";
import Admin from "./components/Admin/Admin";
import ForgotPassWord from "./components/forgotPassWord/ForgotPassWord";
import Working from "./components/Working/Working";
// import context
import { LightThemeContext } from "./context/LightThemeContext";
import { IdThemeContext } from "./context/IdThemeContext";

function App(props) {
  const [lightTheme, setLightTheme] = useState(false);
  const [isId, setIsId] = useState(false);

  return (
    <LightThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      <IdThemeContext.Provider value={{ isId, setIsId }}>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/working" element={<Working />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/notice/:id" element={<NoticeView />} />
              <Route path="/myaccount" element={<Myaccount />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/joinus" element={<JoinUs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/forgotPassword" element={<ForgotPassWord />} />
            </Routes>
            <Footer />
          </Router>
          <ToastContainer />
        </div>
      </IdThemeContext.Provider>
    </LightThemeContext.Provider>
  );
}

export default App;
