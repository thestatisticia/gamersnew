import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
