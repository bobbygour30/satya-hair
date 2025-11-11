import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SyntheticHTLP1 from './pages/SyntheticHTLP1';
import HomePage from './pages/HomePage'; // optional, if you still need old page

const App = () => (
  <Routes>
    {/* 1. Root → redirect to /synthethic-ht-lp1 */}
    <Route path="/" element={<Navigate to="/synthethic-ht-lp1" replace />} />

    {/* 2. Your main landing page */}
    <Route path="/synthethic-ht-lp1" element={<SyntheticHTLP1 />} />

    {/* Optional: Keep old HIFU page */}
    <Route path="/hifu-treatment-lp1" element={<HomePage />} />

    {/* Optional: Catch-all fallback */}
    <Route path="*" element={<Navigate to="/synthethic-ht-lp1" replace />} />
  </Routes>
);

export default App;