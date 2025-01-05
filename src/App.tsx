import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal';
import { Trades } from './pages/Trades';
import { Playbook } from './pages/Playbook';
import { Backtesting } from './pages/Backtesting';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/trades" element={<Trades />} />
            <Route path="/playbook" element={<Playbook />} />
            <Route path="/backtesting" element={<Backtesting />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}