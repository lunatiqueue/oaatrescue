import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });
      const data = await (res.ok
        ? res.json()
        : res.json().then(err => { throw new Error(err.message); })
      );
      localStorage.setItem('token', data.token);
      navigate('/admin', { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 section-title">Admin Login</h2>
      {err && <div className="alert alert-danger">{err}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary px-4">Log In</button>
      </form>
    </div>
  );
};
