import React from "react";

const SignUp = () => {
  return (
    <main>
      <section>
        <h1>sign up</h1>
        <form className="signup-form">
          <div className="name-fields">
            <input
              type="First Name"
              placeholder="first"
              className="input-field"
            />
            <input
              type="lastname"
              placeholder="Last Name"
              className="input-field"
            />
          </div>
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
          <label>
            <input type="checkbox" />I agree to the terms and conditions
          </label>
          <button type="submit" className="signup-button">
            Sing up
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
