import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components Import
import Navbar from './components/Navbar';
import Footer from "../src/components/Footer";

//Pages Import
import Home from './Pages/Home';
import News from "./Pages/News";

import "./Styles/Home.css";

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route exact path='/News' element={<News />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
