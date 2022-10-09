import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import JoinUs from "./components/JoinUs/JoinUs";
import Myaccount from "./components/MyAccount/MyAccount"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
