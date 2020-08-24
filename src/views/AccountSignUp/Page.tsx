import React, { useState } from "react";
import { Button } from "@temp/components";
import { TextField } from "@components/molecules";
import ReactSVG from "react-svg";
import logo from "images/logo1.svg";
import eyeIcon from "images/baseline-lock.svg"
import PageHeader from "@temp/components/Header/PageHeader";
import "./scss/index.scss";

interface IPageProps {
  history: any;
}

const Page = (props: IPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const loading = false;

  const handleOnSubmit =  (evt: React.FormEvent<any>) => {
    console.log("event",evt.target)
    evt.preventDefault();
  };

  const handleBackButton =  () => {
    props.history.push('/landing')
  };

  return (
      <div>
        <PageHeader
          back={true}
          cart={false}
          search={false}
          handleClick={handleBackButton}
        />
      <div className="sign-up">
        <ReactSVG
          path={logo}
          className="logo"
        />
        <form onSubmit={handleOnSubmit}>
          <TextField
            name="fullName"
            label="Full Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="password">
            <TextField
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            >
            </TextField>
            <ReactSVG className="eye-icon"
              path={eyeIcon}
            />
          </div>
          <div className="confirm-password">
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <ReactSVG  className="eye-icon"
              path={eyeIcon}
            />
          </div>
          <div className="sign-up__button">
            <Button type="submit" {...(loading && { disabled: true })}>
              {loading ? "Loading" : "Sign In"}
            </Button>
          </div>
          <div className="term-condition">
            <p>By signing up you agree with our</p>
            <p>Terms and Conditions</p>
            </div>
        </form>
      </div>
      </div>
  );
};

export default Page;
