import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Detail from "./component/pages/Detail";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
