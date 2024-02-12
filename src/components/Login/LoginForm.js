import React, { useState } from 'react';

import LoginButton from "./LoginButton";

function LoginForm({children}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj można dodać logikę przetwarzania formularza (np. uwierzytelnianie)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"></label>
        <input className='login-input'
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="USERNAME"
          required
        />
      </div>

      <div>
        <label htmlFor="password"></label>
        <input className='login-input'
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="PASSWORD"
          required
        />
      </div>
        <LoginButton/>
    </form>
  );
}

export default LoginForm;