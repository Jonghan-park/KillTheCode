import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
