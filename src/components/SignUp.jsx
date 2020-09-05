import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default withRouter(Signup);
