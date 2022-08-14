import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./Styles/Home.css";

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
