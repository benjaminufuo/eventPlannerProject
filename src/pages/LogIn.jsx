import React from "react";

const Login = () => {
  return (
    <main>
      <section>
        <h1>log in</h1>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
