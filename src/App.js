import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyleType: "none" }}>
            <li >
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
