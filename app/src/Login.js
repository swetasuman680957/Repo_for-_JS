import React, { useState, useEffect } from 'react';
// import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    if (email === '' || password === '') {
      setError('Email and password cannot be empty');
      return false;
    }
    if (!email.includes('@deloitte.com')) {
      setError('Invalid email');
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
    }
  }

  return (
    <div className="Login" style={{ backgroundImage: 'url(/top-right.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center'  }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
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
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Show alert if there is an error */}
      {error && (
        <div 
          className="alert alert-danger" 
          role="alert"
          style={{position: 'fixed', top: 0, width: '100%'}}
        >
          {error}
        </div>
      )}

      {/* Show alert if login is successful */}
      {success && (
        <div 
          className="alert alert-success" 
          role="alert"
          style={{position: 'fixed', top: 0, width: '100%'}}
        >
          {success}
        </div>  
      )}
    </div>
  );
}

export default Login;
