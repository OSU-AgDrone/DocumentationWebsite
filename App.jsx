// App.jsx
/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import CreatorsPage from './CreatorsPage';
import PartsPage from './PartsPage';
import BuildPage from './BuildPage';
import { navStyles, containerStyles } from './css/Styles';

import creatorsData from './siteData/creatorsData.json';
import partsData from './siteData/partsData.json';

const App = () => {
  return (
    <Router>
      <div>
        <nav css={navStyles}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/creators">Creators</Link></li>
            <li><Link to="/parts">Parts</Link></li>
            <li><Link to="/build">Build and Use</Link></li>
          </ul>
        </nav>

        <div css={containerStyles}>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />} 
            />
            <Route
              path="/creators"
              element={<CreatorsPage creators={creatorsData} />}
            />
            <Route
              path="/parts"
              element={<PartsPage parts={partsData} />}
            />
            <Route
              path="/build"
              element={<BuildPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
