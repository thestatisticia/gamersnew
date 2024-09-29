import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
