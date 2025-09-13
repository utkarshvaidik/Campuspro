import React, { useState } from 'react';
import { login } from '../api/auth';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login(username, password);
      onLogin(data.token, data.role);
    } catch (err) {
      setError("गलत यूज़रनेम या पासवर्ड");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>School Login</h2>
      <input type="text" placeholder="Username"
             value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password"
             value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  );
}
