// @ts-nocheck
import "./scss/index.scss";

import React, { useState } from "react";
import { Button } from "..";
import { CheckoutContext } from "../../checkout/context";

const QUERY = `
  query signin(
    email: $email,
    password: $email,
  ){

  }
`;

const LoginForm: React.FC<any> = ({ form }) => {
  // const [signIn, { loading, error }] = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { update } = React.useContext(CheckoutContext);

  const loading = false;

  const handleOnSubmit = async (evt: React.FormEvent<any>) => {
    evt.preventDefault();
    // const authenticated = await signIn({ email, password });
    // update({ syncUserCheckout: true });
  };
  return (
    <div className="login-form">
      <span>Reimplement this form</span>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          autoComplete="email"
          name="email"
          placeholder="johndoe@example.com"
          required
        />
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          autoComplete="password"
          name="password"
          required
        />

        <div className="login-form__button">
          <Button type="submit" {...(loading && { disabled: true })}>
            {loading ? "Loading" : "Sign in"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
