import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
    if (success) {
      setTimeout(() => {
        setSuccess(null);
      }, 5000);
    }
  }, [error, success]);

  function validate() {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/)) {
      setError('Password does not meet criteria');
      return false;
    }
    if (!email.match(/^[^\s@]+@deloitte.com$/)) {
      setError('Invalid email. Use your deloitte ID');
      return false;
    }
    return true;
  }

  async function handleSubmit(e) { 
    e.preventDefault();
    if (validate()) {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, confirmPassword, apiSecret: '1234' })
      });
      const data = await response.json();
      if (data.success) {
        setSuccess('Registration successful. Please login.');
      } else {
        setError(data.message);
      }
    }
  }


  return (
    <div style={{ backgroundImage: 'url(/top-right.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center'  }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 data-testid="register-header">Register</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} data-testid="register-form">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      data-testid="email-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      data-testid="password-input" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      data-testid="confirm-password-input" 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" data-testid='submit-button'>
                    Register
                  </button>
                  <Link to="/login">Login</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div 
          className="alert alert-danger" 
          role="alert"
          style={{position: 'fixed', top: 0, width: '100%'}}
          data-testid="error-message"
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default Register;
