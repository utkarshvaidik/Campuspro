import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  function handleLogin(t, r) {
    setToken(t);
    setRole(r);
  }

  function handleLogout() {
    setToken(null);
    setRole(null);
  }

  if (!token) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Dashboard role={role} onLogout={handleLogout} />
  );
}

export default App;
