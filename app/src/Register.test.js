import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Register from './Register';

test('Register page renders', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  expect(screen.getByTestId('register-header')).toHaveTextContent('Register');
});

test('Email input renders', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  expect(screen.getByTestId('email-input')).toBeInTheDocument();
});

test('Password input renders', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
});

test('Confirm Password input renders', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument(); 
});

test('Error message renders when passwords do not match', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText('Enter password'), {
    target: { value: 'password' }
  });
  fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
    target: { value: 'password1' }
  });
fireEvent.click(screen.getByTestId('submit-button')); 
  expect(screen.getByTestId('error-message')).toHaveTextContent('Passwords do not match');
});

test('Registration successful', () => {
  const email = 'test@deloitte.com';
  const password = 'password1234@287A';
  const confirmPassword = 'password1234@287A';
  
  const fetchMock = jest.fn().mockResolvedValue({ success: true, ok: true, status: 200 });
  
  const { getByTestId } = render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  
  fireEvent.change(getByTestId('email-input'), { target: { value: email } });
  fireEvent.change(getByTestId('password-input'), { target: { value: password } });
  fireEvent.change(getByTestId('confirm-password-input'), { target: { value: confirmPassword } });
  fireEvent.click(getByTestId('submit-button'));

  waitFor(() => {
    expect(fetchMock).toHaveBeenCalled('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, confirmPassword })
  });
  })
});



// Add more test cases...
