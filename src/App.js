
import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Created by:Rakesh Pabbathi</h1>
      <Sidebar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
