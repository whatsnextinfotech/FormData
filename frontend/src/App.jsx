
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin';
import UserForm from './pages/ApplyForm';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
         <Header/>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/edit/:id" element={<UserForm />} /> */}
          </Routes>
        </main>
        
        {/* <footer className="app-footer">
          <p>&copy; 2025 Loan Management System</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;