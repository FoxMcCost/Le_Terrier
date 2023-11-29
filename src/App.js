

import './App.css';
import Home from './pages/home.js'
import Faq from './pages/faq.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

