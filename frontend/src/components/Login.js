import React from 'react';
import { useNavigate } from 'react-router-dom';

const loginValidate = (username, password) => {
  const expectedUsername = 'KMVLBADMIN';
  const expectedPassword = 'KMVLBADMIN';
  const adminUsername = 'Kmvadmin';
  const adminPassword = 'Kmvadmin';
  const applicantManagerUsername ='Admin';
  const applicantManagerUserPassword = 'admin';

  if (username === expectedUsername && password === expectedPassword) {
    return 'user';

  } else if (username === adminUsername && password === adminPassword) {
    return 'admin';

  }
  
  else if (username === applicantManagerUsername && password === applicantManagerUserPassword) {
    return 'applicantManager';
  }else {
    return 'invalid';
  }
};


const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    const loginResult = loginValidate(username, password);

    if (loginResult === 'user') {
      alert('User login successful');
      navigate('/books');
      console.log('User login successful');

    } else if (loginResult === 'admin') {
      alert('Admin login successful');
      
      navigate('/addminDashboard');
      console.log('Admin login successful');

    } else if(loginResult === 'applicantManager'){
      navigate('/applicanthome');
      console.log('Admin login successful');
    }
    
    else {
      alert('Invalid username or password');
      console.log('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            name="username" 
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password" // Added name attribute for accessing the value
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
